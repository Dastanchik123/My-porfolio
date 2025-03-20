const colorarray = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "brown",
  "#9933CC",
  "grey",
  "cadetblue",
];
const avatar = document.querySelector(".avatar");
const avatarid = document.getElementById("avatarid");
const about = document.querySelector(".about");
const experience = document.querySelector(".experience");
const projects = document.querySelector(".projects");
const skills = document.querySelector(".skills");
const education = document.querySelector(".education");
const header = document.querySelector("header");
const headerText = document.querySelector("header h1");
const slider = document.querySelector(".slider");
const mainContent = document.querySelector("#main-content");
const sliderItems = document.querySelectorAll(".slider-item");
const content0 = document.querySelector(".content1");

mainContent.innerHTML = content0.innerHTML;
content0.classList.add('borderLeftColor');
headerText.textContent = 'Обо мне';
//адресс аватара
if (avatarid) {
  avatarid.src = "img\\icons8-student-50.png";
}

function changBackgroundColor(slidItem) {
  sliderItems.forEach((item) => {
    item.classList.remove('borderLeftColor');;
  });
  slidItem.classList.add('borderLeftColor');
}


let headerHeigth = parseInt(window.getComputedStyle(header).height);
let sliderWhidth = parseInt(window.getComputedStyle(slider).width);

header.style.left = sliderWhidth + "px";
mainContent.style.marginTop = headerHeigth + 15 + "px";
mainContent.style.marginLeft = sliderWhidth + 15 + "px";

// if (sliderWhidth <= 150) {
//   slider.style.display = "none";
//   mainContent.style.marginLeft = 15 + "px";
//   header.style.left = 0 + "px";
// }


window.addEventListener("resize", function () {
  headerHeigth = parseInt(window.getComputedStyle(header).height);
  sliderWhidth = parseInt(window.getComputedStyle(slider).width);

  header.style.left = sliderWhidth + "px";
  mainContent.style.marginTop = headerHeigth + 15 + "px";
  mainContent.style.marginLeft = sliderWhidth + 15 + "px";
  // console.log(sliderWhidth);
  //   if (sliderWhidth == 150 ) {
  //     slider.classList.add('dbnone')
  //     header.style.left = 0 + "px";
  //     console.log('yes');
  //   }
  //   else if (sliderWhidth > 150) {
  //     slider.classList.remove('dbnone');
  //   console.log('no');
  // }
});

function containerModification(content) {
  const content112 = document.querySelector(content);
  mainContent.innerHTML = content112.innerHTML;

  switch (content) {
    case '.content1':
      headerText.textContent = 'Обо мне';
      break;
    case '.content2':
      headerText.textContent = 'Опыт';
      break;
    case '.content3':
      headerText.textContent = 'Проекты';
      break;
    case '.content4':
      headerText.textContent = 'Навыки';
      break;
    case '.content5':
      headerText.textContent = 'Контакты';
      break;

    default:
      break;
  }
}

