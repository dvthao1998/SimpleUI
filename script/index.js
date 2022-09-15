const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navBar = $(".nav-bar");
const navList = $(".nav-list");
const signInBtn = $(".nav-login-signin");
const signUpBtn = $(".nav-login-signup");
const modalLogin = $(".modal-login");
const closeBtn = $(".close-button");
const recheck = $(".recheck");
const recheckPassword = $(".recheck-password");
const LoginBtnModal = $(".sign-in-btn");
const SignUpBtnModal = $(".sign-up-btn");
const rateList = $(".rate-list");
const moveButtonLeft = $(".move-button-left");
const moveButtonRight = $(".move-button-right");

function handleNavBar(e) {
  navList.classList.toggle("active");
}
function handleClickOutMenu(e) {
  if (!navList.contains(e.target) && !e.target.matches(".nav-bar")) {
    navList.classList.remove("active");
  }
}
function handleSignIn(e) {
  console.log(e.target);
  modalLogin.classList.add("active");
  recheck.style.display = "none";
  recheckPassword.style.display = "none";
  SignUpBtnModal.style.display = "none";
  LoginBtnModal.style.display = "block";
}
function handleSignUp(e) {
  modalLogin.classList.add("active");
  recheck.style.display = "block";
  recheckPassword.style.display = "block";
  SignUpBtnModal.style.display = "block";
}
function handleCloseModal(e) {
  modalLogin.classList.remove("active");
}

let scrollBar = rateList.scrollLeft;

function handleScrollRateLeft(e) {
  console.log(rateList.scrollLeft);
  rateList.scroll(rateList.scrollLeft - 450, 0);
}
function handleScrollRateRight(e) {
  if (scrollBar < 1380) {
    console.log(scrollBar);
    rateList.scroll(rateList.scrollLeft + 450, 0);
  }
}

signInBtn.addEventListener("click", handleSignIn);
signUpBtn.addEventListener("click", handleSignUp);
navBar.addEventListener("click", handleNavBar);
closeBtn.addEventListener("click", handleCloseModal);
moveButtonLeft.addEventListener("click", handleScrollRateLeft);
moveButtonRight.addEventListener("click", handleScrollRateRight);
document.addEventListener("click", handleClickOutMenu);
