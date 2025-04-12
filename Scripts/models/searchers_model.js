export default class PostModel {
  getPosts() {
    return JSON.parse(localStorage.getItem("posts")) || [];
  }

  savePost(post) {
    const posts = this.getPosts();
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  getCurrentUsername() {
    const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
    return currentAccount?.name || null;
  }

  filterPostsByQuery(query) {
    const posts = this.getPosts();
    const lower = query.toLowerCase();

    return posts.filter(post =>
      post.title.toLowerCase().includes(lower) ||
      post.content.toLowerCase().includes(lower) ||
      post.username.toLowerCase().includes(lower)
    );
  }
}
