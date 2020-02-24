setInterval(addSecond, 1000);

function addSecond() {
  let counter = document.getElementById("counter");
  let counterNum = parseInt(counter.innerText);
  counter.textContent = counterNum + 1;
}

function subtractSecond() {
  let counter = document.getElementById("counter");
  let counterNum = parseInt(counter.innerText);
  counter.textContent = counterNum - 1;
}

document.getElementById("plus").addEventListener("click", function() {
  addSecond();
});
document.getElementById("minus").addEventListener("click", function() {
  subtractSecond();
});

document.getElementById("heart").addEventListener("click",function() {
  let num = document.getElementById("counter").innerText;
  let likes = document.querySelector(".likes");
  let liArray = likes.querySelectorAll("li");
  let newLi = document.createElement("LI");
  let like = 1;
  
  function clickHeart() {
    if (liArray.length === 0) {
      newLi.innerText = `${num} has been liked ${like} time(s)`;
      likes.appendChild(newLi);
    } else {
      addLikes();
    }
  }
  
  function addLikes() {
    for (let i = 0; i < liArray.length; i++) {
      let numInLi = liArray[i].innerText.split(" ")[0];
      let likeCount = liArray[i].innerText.split(" ")[4];
      if (numInLi === num) {
        likes.removeChild(liArray[i]);
        newLi.innerText = `${num} has been liked ${++likeCount} time(s)`;
        likes.appendChild(newLi);
      } else if (numInLi !== num.innerText) {
        newLi.innerText = `${num} has been liked ${like} time(s)`;
        likes.appendChild(newLi);
      }
    }
  }
  clickHeart();
});