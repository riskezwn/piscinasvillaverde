function showOrHide(rowNum) {
  var div = document.getElementById("block_" + rowNum);
  var arrow = document.getElementById("arrow_" + rowNum);
  if (div.style.display === "none") {
    div.style.display = "block";
    arrow.innerHTML = "arrow_drop_down";
  } else {
    div.style.display = "none";
    arrow.innerHTML = "arrow_drop_up";
  }
}

// for (const button of document.querySelectorAll('div.categoria')) {
// button.addEventListener('click', () => {
//     button.nextElementSibling.classList.toggle('hidden');
// });
// }
