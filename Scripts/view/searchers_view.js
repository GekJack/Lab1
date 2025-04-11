export default class PostView {
    constructor() {
      this.modal = document.getElementById("postModal");
      this.openBtn = document.getElementById("addPostBtn");
      this.closeBtn = document.getElementById("closeModal");
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
        this.modal.style.display = "block";
      };
  
      this.closeBtn.onclick = () => {
        this.modal.style.display = "none";
      };
  
      window.onclick = (event) => {
        if (event.target === this.modal) {
          this.modal.style.display = "none";
        }
      };
  
      this.submitBtn.onclick = () => {
        const title = this.titleInput.value.trim();
        const content = this.contentInput.value.trim();
        if (title && content) {
          onSubmit(title, content);
          this.clearForm();
          this.modal.style.display = "none";
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
        <div class="discussion-footer">Буду радий вашому відгуку!</div>
      `;
      this.postsContainer.prepend(div);
    }
  }
  