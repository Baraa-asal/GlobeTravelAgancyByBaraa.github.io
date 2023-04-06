// const info = document.getElementById('info');
// const toggleInfo = document.getElementById('toggleInfo');
// const elements = document.querySelectorAll('.viewMore'); // select all elements with class "viewMore"
// console.log(elements)

// elements.forEach(element => {
//   element.addEventListener('click', () => {
//     console.log("check")
//         if(toggleInfo.textContent == 'View more') {
//         info.classList.remove("row2-info")
//         toggleInfo.textContent = 'Hide text';
//     }
//     else if(toggleInfo.textContent == 'Hide text'){
//         info.classList.add("row2-info")
//         toggleInfo.textContent = 'View more';
//     }
//     });
// });


const elements = document.querySelectorAll('.viewMore'); // select all elements with class "viewMore"
console.log("check");

console.log(elements);

elements.forEach((element, index) => {
  element.addEventListener('click', (event) => {
    console.log(elements);

    const info = document.getElementById(`info${index + 1}`);
    const toggleInfo = document.getElementById(`toggleInfo${index + 1}`);
    if (toggleInfo.innerText == 'View more') {
      info.classList.remove("row2-info");
      toggleInfo.innerText = 'Hide text';
    } else if (toggleInfo.innerText == 'Hide text') {
      info.classList.add("row2-info");
      toggleInfo.innerText = 'View more';
    }
  });
});