class PostView {
    constructor() {
        this.postList = document.getElementById('posts');
        this.postForm = document.getElementById('postForm');
        this.titleInput = document.getElementById('title');
        this.contentInput = document.getElementById('content');

        if (this.postForm) {
            this.postForm.addEventListener('submit', (event) => {
                event.preventDefault();
                this.onAddPost(this.titleInput.value, this.contentInput.value);
            });
        }
    }

    displayPosts(posts) {
        if (this.postList) {
            this.postList.innerHTML = '';
            posts.forEach((post, index) => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post', 'mb-4');
                postDiv.innerHTML = `
                    <h4>${post.title}</h4>
                    <p>${post.content}</p>
                    <button class="btn btn-danger" data-index="${index}">Видалити</button>
                `;
                this.postList.appendChild(postDiv);
            });

            this.postList.querySelectorAll('.btn-danger').forEach(button => {
                button.addEventListener('click', () => {
                    this.onDeletePost(button.dataset.index);
                });
            });
        }
    }

    bindAddPost(handler) {
        this.onAddPost = handler;
    }

    bindDeletePost(handler) {
        this.onDeletePost = handler;
    }
}

export { PostView };
