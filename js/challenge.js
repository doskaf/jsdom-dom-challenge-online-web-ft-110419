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

let secondCounter = setInterval(addSecond, 1000);

document.getElementById("plus").addEventListener("click", function() {
  addSecond();
});

document.getElementById("minus").addEventListener("click", function() {
  subtractSecond();
});

document.getElementById("heart").addEventListener("click",function() {
  let num = document.getElementById("counter").innerText;
  let likes = document.querySelector(".likes");
  let liArray = likes.querySelectorAll("li")
  let newLi = document.createElement("LI");
  likes.appendChild(li);
});

// document.getElementById("heart").addEventListener("click", () => {
//     let counter = document.getElementById("counter").innerText;
//     let liList = document.querySelector("ul").querySelectorAll("li")
//     let ul = document.querySelector("ul");
//     let li = document.createElement('li');
//     let n = 1
//     function like() {
//         if (liList.length === 0 ) {
//             li.innerHTML = `${counter} has been liked ${n} times`;
//             ul.appendChild(li);
//         } else if (liList.length > 0) {
//             commentText(liList)
//         }
//     };
//     function commentText() {
//         for (let i = 0; i < liList.length; i++) {
//             let item = liList[i];
//             let num = item.innerText.split(" ")[0]
//             let times = item.innerText.split(" ")[4]

//             if (num === counter) {
//                 document.querySelector("ul").removeChild(item)
//                 li.innerText = `${counter} has been liked ${++times} times`;
//                 ul.appendChild(li);

//             } else if (num !== counter.innerText) {
//                 li.innerText = `${counter} has been liked ${n} times`;
//                 ul.appendChild(li);
//             } 
//         }
//     }
//     like()
// });