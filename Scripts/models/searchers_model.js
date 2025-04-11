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
      const currentAccount = JSON.parse(localStorage.getItem("currentaccount"));
      return currentAccount?.name || null;
    }
  }
  