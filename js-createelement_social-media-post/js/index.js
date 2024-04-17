console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const addPost = document.createElement("section");
addPost.classList.add("post");

const addText = document.createElement("p");
addText.classList.add("post__content");
addText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const addFooter = document.createElement("footer");
addFooter.classList.add("post__footer");

const addSpan = document.createElement("span");
addSpan.classList.add("post__username");
addSpan.textContent = "@username";

const addLikeButton = document.createElement("button");
addLikeButton.classList.add("post__button");
addLikeButton.textContent = "♥ Like";
addLikeButton.addEventListener("click", handleLikeButtonClick);
addFooter.append(addSpan, addLikeButton);
addPost.append(addText, addFooter);
document.body.append(addPost);
