class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

class PostModel {
    constructor() {
        this.posts = [];
    }

    addPost(title, content) {
        const post = new Post(title, content);
        this.posts.push(post);
        this.onPostListChanged(this.posts);
    }

    deletePost(index) {
        this.posts.splice(index, 1);
        this.onPostListChanged(this.posts);
    }

    bindPostListChanged(callback) {
        this.onPostListChanged = callback;
    }
}

export { PostModel };
