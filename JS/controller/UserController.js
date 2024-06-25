import { UserModel, User } from '../model/UserModel.js';
import { UserView } from '../view/UserView.js';

class UserController {
    constructor(userModel, userView) {
        this.userModel = userModel;
        this.userView = userView;

        console.log("UserController initialized");

        this.userView.bindRegister(this.handleRegister);
        this.userView.bindLogin(this.handleLogin);

        this.displayProfile();
    }

    handleRegister = (user) => {
        const newUser = new User(user.name, user.email, user.gender, user.dob, user.password);
        this.userModel.addUser(newUser);
        this.userModel.setCurrentUser(newUser);
        this.userView.displayMessage('Реєстрація успішна!');
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 1000);
    };

    handleLogin = (email, password) => {
        const user = this.userModel.getUser(email, password);
        if (user) {
            this.userModel.setCurrentUser(user);
            window.location.href = 'profile.html';
        } else {
            alert('Невірні дані для входу');
        }
    };

    handleLogout = () => {
        console.log("Logout handler called");
        this.userModel.logout();
        window.location.href = 'login.html';
    };

    displayProfile() {
        const user = this.userModel.getCurrentUser();
        console.log("Displaying profile", user);
        if (user && this.userView.profileInfo) {
            this.userView.displayProfile(user);
            this.userView.bindLogout(this.handleLogout); // Move this here to ensure handleLogout is defined
        } else {
            this.userView.displayNoUser();
        }
    }
}

export { UserController };
