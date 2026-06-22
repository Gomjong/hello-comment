fetch("/comments")
  .then((response) => response.json())
  .then((comments) => {
    const commentsDiv = document.getElementById("comments");

    comments.forEach((comment) => {
      commentsDiv.innerHTML += `<p>${comment.comment}</p>`;
    });
  });