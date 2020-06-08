var loader = document.querySelector(".preloader");
var profileImg = document.getElementsByClassName("author_img");
var profileName = document.getElementById("name");
var profileNumber = document.getElementById("about");

var url = "https://knight-foodji.herokuapp.com/api/deliveryguy/me";

var token = localStorage.getItem("foodji-delivery-guy-auth-header");

fetch(url, {
  accept: "application/json",
  mode: "cors",
  method: "GET",

  headers: {
    Authorization: token,
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    profileName.innerHTML = data["name"];
    profileNumber.innerHTML = data["phone"];
  })
  .then((_) => {
    loader.remove();
  });
