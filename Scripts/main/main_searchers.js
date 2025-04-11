import PostModel from "Lab1/Scripts/models/searchers_model.js";
import PostView from "Lab1/Scripts/view/searchers_view.js";
import PostController from "Lab1/Scripts/controller/searchers_controller.js";

document.addEventListener("DOMContentLoaded", function () {
  const model = new PostModel();
  const view = new PostView();
  const controller = new PostController(model, view);
});
