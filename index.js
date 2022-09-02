const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
const bgClose = document.querySelector(".bg-close");
const pageShadow = document.querySelector(".page-shadow");
const pointMenu = document.querySelectorAll(".bg-point");

burgerIcon.addEventListener('click',
  function() {
    burgerMenu.classList.add("active");
    pageShadow.classList.add("active");
  }
);

bgClose.addEventListener('click',
  function() {
    pageShadow.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
);

pageShadow.addEventListener('click',
  function() {
    pageShadow.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
);

pointMenu.forEach((item) => {
    item.addEventListener('click',
      function() {
        pageShadow.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    )
  }
);

const loginButton = document.getElementById("loginButton");
let popup = document.querySelector(".pop-up");
const closePopUp = document.getElementById("closePopUp");
const accButton = document.getElementById("accountButton");

loginButton.addEventListener("click", () => {
  popup.classList.toggle("hidden");
})

closePopUp.addEventListener("click", () => {
  popup.classList.add("hidden");
})

accButton.addEventListener("click", () => {
  popup.classList.toggle("hidden");
})


const register = document.getElementById("registerLink");


register.addEventListener("click", () => {
  if (register.textContent === "Register") {
    document.querySelector(".pop-up").style.height = "436px";
    document.querySelector(".pop-up__title").textContent = "Create account";
    document.querySelector(".pop-up__title").style.marginTop = "30px";
    document.querySelector(".pop-up__facebook").style.display = "none";
    document.querySelector(".pop-up__google").style.display = "none";
    document.querySelector(".pop-up__border1").style.display = "none";
    document.querySelector(".email__sn").style.marginBottom = "0px";
    document.querySelector(".password__sn").style.marginBottom = "0px";
    document.querySelector(".pop-up__sign-in").style.marginTop = "0px";
    document.querySelector(".pop-up__sign-in").style.marginBottom = "-20px";
    document.querySelector(".pop-up__sign-in").textContent = "Sign up";
    document.querySelector(".pop-up__forgot").style.display = "none";
    document.querySelector(".pop-up__final__box").style.width = "225px";
    document.querySelector(".pop-up__account").textContent = "Already have an account?";
    document.querySelector(".pop-up__register").textContent = "Log in";
  } else {
    document.querySelector(".pop-up").style.height = "660px";
    document.querySelector(".pop-up__title").textContent = "Log in to your account";
    document.querySelector(".pop-up__title").style.marginTop = "25px";
    document.querySelector(".pop-up__facebook").style.display = "flex";
    document.querySelector(".pop-up__google").style.display = "flex";
    document.querySelector(".pop-up__border1").style.display = "initial";
    document.querySelector(".email__sn").style.marginBottom = "15px";
    document.querySelector(".password__sn").style.marginBottom = "28px";
    document.querySelector(".pop-up__sign-in").style.marginTop = "-20px";
    document.querySelector(".pop-up__sign-in").style.marginBottom = "0px";
    document.querySelector(".pop-up__sign-in").textContent = "Sign in";
    document.querySelector(".pop-up__forgot").style.display = "initial";
    document.querySelector(".pop-up__final__box").style.width = "219px";
    document.querySelector(".pop-up__account").textContent = "Don`t have an account?";
    document.querySelector(".pop-up__register").textContent = "Register";
  }
})

let signIn = document.querySelector(".pop-up__sign-in");

signIn.addEventListener("click", function () {
  let email = document.querySelector(".email__sn").value
  let password = document.querySelector(".password__sn").value

  alert(`E-mail: ${email}\nPassword: ${password}`)
})



const slider = document.querySelector(".slider");
const e1 = document.querySelector(".el-one");
const e2 = document.querySelector(".el-two");
const e3 = document.querySelector(".el-three");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");


if(window.innerWidth >= 391) {
document.querySelector(".slider-container1").addEventListener("click", () => {
  slider.style.left = "33.33%";
  e1.classList.add("el-opacity");
  e2.classList.remove("el-opacity");
  e3.classList.remove("el-opacity");
})
}

if(window.innerWidth >= 391) {
document.querySelector(".slider-container2").addEventListener("click", () => {
  slider.style.left = "0%";
  e1.classList.remove("el-opacity");
  e2.classList.add("el-opacity");
  e3.classList.remove("el-opacity");
  })
}

if(window.innerWidth >= 391) {
document.querySelector(".slider-container3").addEventListener("click", () => {
  slider.style.left = "-33.33%";
  e1.classList.remove("el-opacity");
  e2.classList.remove("el-opacity");
  e3.classList.add("el-opacity");
  })
}




arrowLeft.addEventListener("click", () => {
  if (slider.style.left === "") {
    slider.style.left = "386px";
    e1.classList.add("el-opacity");
    e2.classList.remove("el-opacity");
    e3.classList.remove("el-opacity");
  } 
  if (slider.style.left === "-386px") {
    slider.style.left = "";
    e1.classList.remove("el-opacity");
    e2.classList.add("el-opacity");
    e3.classList.remove("el-opacity");
  } 
  })


arrowRight.addEventListener("click", () => {
if (slider.style.left === "") {
  slider.style.left = "-386px";
  e1.classList.remove("el-opacity");
  e2.classList.remove("el-opacity");
  e3.classList.add("el-opacity");
} 
if (slider.style.left === "386px") {
  slider.style.left = "";
  e1.classList.remove("el-opacity");
  e2.classList.add("el-opacity");
  e3.classList.remove("el-opacity");
} 
})








console.log ('125/125 \n 1. Слайдер изображений в секции destinations +50: \n на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется\n по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево,\n а та что была видна наполовину оказывается справа).\n Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20');
console.log ('Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек,\n который становится активным при нахождении соответствующего ему слайда в центре.\n На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации\n (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20)');
console.log ('Анимации плавного перемещения для слайдера +10');
console.log ('2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50');
console.log ('логин попап соответствует верстке его закрытие происходит при клике вне попапа +25');
console.log ('логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт\n с введенными данными (для реализации можно использовать тег ) +25');
console.log ('3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету\n (То есть нажатие не закрывает модал а просто меняет его наполнение). +25');