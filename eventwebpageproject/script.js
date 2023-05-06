const loginbox = document.querySelector(".loginbox");
const registerlink = document.querySelector(".register-link");
const loginlink = document.querySelector(".login-link");
const btnpopup = document.querySelector(".btnLogin-popup");
const iconclose = document.querySelector(".icon-close");

registerlink.onclick = () => {
  loginbox.classList.add("active");
};

loginlink.onclick = () => {
  loginbox.classList.remove("active");
};

btnpopup.onclick = () => {
  loginbox.classList.add("active-popup");
};

iconclose.onclick = () => {
  loginbox.classList.remove("active-popup");
};
