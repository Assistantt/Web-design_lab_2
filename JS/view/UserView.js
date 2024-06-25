class UserView {
    constructor() {
        this.registerForm = document.getElementById('registerForm');
        this.loginForm = document.getElementById('loginForm');
        this.profileInfo = document.querySelector('.profile-info');
        console.log("UserView initialized");
    }

    bindRegister(handler) {
        if (this.registerForm) {
            this.registerForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(this.registerForm);
                const user = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    gender: formData.get('gender'),
                    dob: formData.get('dob'),
                    password: formData.get('password'),
                };
                handler(user);
            });
        }
    }

    bindLogin(handler) {
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(this.loginForm);
                const email = formData.get('email');
                const password = formData.get('password');
                handler(email, password);
            });
        }
    }

    bindLogout(handler) {
        const logoutButton = document.getElementById('logoutButton');
        console.log("Binding logout handler", logoutButton, handler);
        if (logoutButton) {
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault();
                handler();
            });
        }
    }

    displayProfile(user) {
        if (this.profileInfo) {
            this.profileInfo.innerHTML = `
                <p>Ім'я: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Стать: ${user.gender}</p>
                <p>Дата народження: ${user.dob}</p>
                <button id="logoutButton" class="btn btn-primary">Вийти</button>
            `;
            console.log("Displaying profile", user);
            this.bindLogout(this.handleLogout); // Ensure to bind logout after rendering the button
        }
    }

    displayNoUser() {
        if (this.profileInfo) {
            this.profileInfo.innerHTML = `
                <p>Користувач не увійшов в систему. Будь ласка, <a href="login.html">увійдіть</a> або <a href="register.html">зареєструйтесь</a>.</p>
            `;
        }
    }

    displayMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'alert alert-success';
        messageDiv.innerText = message;
        if (this.registerForm) {
            this.registerForm.appendChild(messageDiv);
        }
    }
}

export { UserView };
