export default class PostController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.bindEvents(this.handleSubmit.bind(this), this.model.getCurrentUsername.bind(this.model));
  
      this.model.getPosts().forEach((post) => {
        this.view.renderPost(post);
      });
    }
  
    handleSubmit(title, content) {
      const username = this.model.getCurrentUsername();
      const time = new Date().toLocaleString();
  
      const post = { username, title, content, time };
      this.model.savePost(post);
      this.view.renderPost(post);
    }
  }
  