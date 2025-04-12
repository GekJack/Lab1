export default class PostController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindEvents(
      this.handleSubmit.bind(this),
      this.model.getCurrentUsername.bind(this.model)
    );

    this.view.bindSearch(this.handleSearch.bind(this));

    this.view.renderPosts(this.model.getPosts());
  }

  handleSubmit(title, content) {
    const username = this.model.getCurrentUsername();
    const time = new Date().toLocaleString();

    const post = { username, title, content, time };
    this.model.savePost(post);
    this.view.renderPost(post);
  }

  handleSearch(query) {
    if (!query) {
      this.view.renderPosts(this.model.getPosts());
      return;
    }

    const filtered = this.model.filterPostsByQuery(query);
    this.view.renderPosts(filtered);
  }
}
