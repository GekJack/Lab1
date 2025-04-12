export default class DiscussionController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      const id = this.getPostIdFromURL();
      const post = this.model.getPostById(id);
      this.view.renderPost(post);
    }
  
    getPostIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }
  }
  