import DiscussionModel from "/Lab1/Scripts/models/discussion_model.js";
import DiscussionView from "/Lab1/Scripts/view/discussion_view.js";
import DiscussionController from "/Lab1/Scripts/controller/discussion_controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new DiscussionModel();
  const view = new DiscussionView();
  new DiscussionController(model, view);
});
