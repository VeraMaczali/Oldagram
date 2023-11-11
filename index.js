const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
const container = document.querySelector(".container");
for (let i = 0; i < posts.length; i++) {
  addNewPost(i);
}

function addNewPost(index) {
  let newPost = document.createElement("section");
  newPost.classList.add("card");
  container.append(newPost);
  newPost.innerHTML = `<div class="card-header">
  <img
    class="avatar"
    src="${posts[index].avatar}"
    alt="vangogh avatar"
  />
  <div class="header-text">
    <p class="name bold">${posts[index].name}</p>
    <p class="location">${posts[index].location}</p>
  </div>
</div>
<img
  class="post"
  src=${posts[index].post}
  alt="van gogh portret"
/>
<div class="comment-section">
  <div class="buttons">
    <img src="./images/icon-heart.png" alt="like icon" class="like" />
    <img
      src="./images/icon-comment.png"
      alt="comment icon"
      class="comment"
    />
    <img src="./images/icon-dm.png" alt="dm icon" class="dm" />
  </div>
  <p class="bold"><span class="count">${posts[index].likes}</span> likes</p>
  <p>
    <span class="username bold">${posts[index].username}</span> ${posts[index].comment}
  </p>
</div>`;
}
