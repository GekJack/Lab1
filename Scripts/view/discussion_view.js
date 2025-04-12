export default class DiscussionView {
    constructor() {
      this.container = document.querySelector("#content .container");
    }
  
    renderPost(post) {
      if (!post) {
        this.container.innerHTML = "<p>Пост не знайдено.</p>";
        return;
      }
  
      this.container.innerHTML = `
        <h2>Обговорення: ${post.title}</h2>
  
        <div class="discussion-header d-flex align-items-center gap-2 mb-3">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User Avatar" class="rounded-circle" style="width: 40px; height: 40px;">
          <div>
            <div class="author fw-bold">${post.username}</div>
            <div class="time text-muted" style="font-size: 0.9em;">${post.time}</div>
          </div>
        </div>
  
        <p>${post.content}</p>
        
        <h4>Ваш коментар:</h4>
        <form action="#" method="POST">
            <textarea class="form-control" rows="4" placeholder="Напишіть ваш коментар..."></textarea>
            <button type="submit" class="btn btn-primary mt-3">Відправити</button>
        </form>
      `;
    }
  }
  