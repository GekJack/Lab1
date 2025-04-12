export default class DiscussionModel {
    getPosts() {
      return JSON.parse(localStorage.getItem("posts")) || [];
    }
  
    getPostById(id) {
      const posts = this.getPosts();
      return posts.find(post => post.id === id);
    }
  }
  