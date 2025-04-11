export default class PostView {
  constructor() {
    this.modalEl = document.getElementById("postModal");
    this.modal = new bootstrap.Modal(this.modalEl); 

    this.openBtn = document.getElementById("addPostBtn");
    this.submitBtn = document.getElementById("submitPost");
    this.titleInput = document.getElementById("postTitle");
    this.contentInput = document.getElementById("postContent");
    this.postsContainer = document.getElementById("postsContainer");
  }

  bindEvents(onSubmit, getUsername) {
    this.openBtn.onclick = () => {
      const username = getUsername();
      if (!username) {
        alert("Щоб написати пост, увійдіть у свій акаунт!");
        return;
      }
      this.modal.show(); 
    };

    this.submitBtn.onclick = () => {
      const title = this.titleInput.value.trim();
      const content = this.contentInput.value.trim();
      if (title && content) {
        onSubmit(title, content);
        this.clearForm();
        this.modal.hide();
      }
    };
  }

  clearForm() {
    this.titleInput.value = "";
    this.contentInput.value = "";
  }

  renderPost(post) {
    const div = document.createElement("div");
    div.className = "discussion-card";
    div.innerHTML = `
      <div class="discussion-header">
        <img src="https://www.w3schools.com/w3images/avatar4.png" alt="User Avatar">
        <div class="author">${post.username}</div>
        <div class="time">${post.time}</div>
      </div>
      <h4>${post.title}</h4>
      <p>${post.content}</p>
      <div class="discussion-footer">Буду радий вам!</div>
    `;
    this.postsContainer.prepend(div);
  }
}
