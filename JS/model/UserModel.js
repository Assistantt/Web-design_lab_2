class UserModel {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        console.log("Loaded users from localStorage:", this.users);
        console.log("Loaded current user from localStorage:", this.currentUser);
    }

    addUser(user) {
        this.users.push(user);
        this.updateLocalStorage();
        console.log("User added:", user);
    }

    getUser(email, password) {
        const user = this.users.find(user => user.email === email && user.password === password);
        console.log("Get user:", user);
        return user;
    }

    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log("Set current user:", user);
    }

    getCurrentUser() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        console.log("Retrieving current user:", user);
        return user;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        console.log("User logged out");
    }

    updateUser(updatedUser) {
        const index = this.users.findIndex(user => user.email === updatedUser.email);
        if (index !== -1) {
            this.users[index] = updatedUser;
            this.updateLocalStorage();
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            console.log("User updated:", updatedUser);
        } else {
            console.log("User not found for update:", updatedUser);
        }
    }

    updateLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.users));
        console.log("Updated localStorage with users:", this.users);
    }
}

class User {
    constructor(name, email, gender, dob, password) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.dob = dob;
        this.password = password;
    }
}

export { UserModel, User };
