import { PostModel } from './model/PostModel.js';
import { UserModel } from './model/UserModel.js';
import { PostView } from './view/PostView.js';
import { UserView } from './view/UserView.js';
import { PostController } from './controller/PostController.js';
import { UserController } from './controller/UserController.js';

document.addEventListener('DOMContentLoaded', () => {
    const postModel = new PostModel();
    const userModel = new UserModel();
    const postView = new PostView();
    const userView = new UserView();
    const postController = new PostController(postModel, postView);
    const userController = new UserController(userModel, userView);
});
