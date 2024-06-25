import { PostModel } from '../model/PostModel.js';
import { PostView } from '../view/PostView.js';

class PostController {
    constructor(postModel, postView) {
        this.postModel = postModel;
        this.postView = postView;

        this.postModel.bindPostListChanged(this.onPostListChanged);
        this.postView.bindAddPost(this.handleAddPost);
        this.postView.bindDeletePost(this.handleDeletePost);

        this.onPostListChanged(this.postModel.posts);
    }

    onPostListChanged = (posts) => {
        this.postView.displayPosts(posts);
    };

    handleAddPost = (title, content) => {
        this.postModel.addPost(title, content);
    };

    handleDeletePost = (index) => {
        this.postModel.deletePost(index);
    };
}

export { PostController };
