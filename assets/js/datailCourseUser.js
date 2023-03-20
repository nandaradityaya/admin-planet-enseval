function toggleBtn(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("table-assign");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.transform = "scaleY(0.2)";
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " selected";
  setTimeout(() => {
    document.getElementById(menuName).style.transform = "scaleY(1)";
  }, 50);
}

$(document).ready(function () {
  $("#tableCompany").hide();
  $("#tableOrganization").hide();
  $("#tableLocation").hide();
  $("#tableJobtitle").hide();
});

window.onload = (event) => {
  document.getElementById("tableUser").style.display = "block";
  document.getElementById("tableUser").style.transform = "scaleY(1)";
};

// window.onload = function () {
//   var tableCompany = document.getElementById("tableCompany");
//   var tableOrganization = document.getElementById("tableOrganization");
//   var tableLocation = document.getElementById("tableLocation");
//   var tableJobtitle = document.getElementById("tableJobtitle");
//   tableCompany.style.display = "none";
//   tableOrganization.style.display = "none";
//   tableLocation.style.display = "none";
//   tableJobtitle.style.display = "none";

//   var btnUser = document.getElementById("showUser");
//   btnUser.classList.add("selected");
// };

// var btnUser = document.getElementById("showUser");
// var btnCompany = document.getElementById("showCompany");
// var btnOrganization = document.getElementById("showOrganization");
// var btnLocation = document.getElementById("showLocation");
// var btnJobtitle = document.getElementById("showJobtitle");

// function showTableUser() {
//   var tableUser = document.getElementById("tableUser");
//   var tableCompany = document.getElementById("tableCompany");
//   var tableOrganization = document.getElementById("tableOrganization");
//   var tableLocation = document.getElementById("tableLocation");
//   var tableJobtitle = document.getElementById("tableJobtitle");
//   tableUser.style.display = "table";
//   tableCompany.style.display = "none";
//   tableOrganization.style.display = "none";
//   tableLocation.style.display = "none";
//   tableJobtitle.style.display = "none";
//   btnUser.classList.add("selected");
//   btnCompany.classList.remove("selected");
//   btnOrganization.classList.remove("selected");
//   btnLocation.classList.remove("selected");
//   btnJobtitle.classList.remove("selected");
// }

// function showTableCompany() {
//   var tableUser = document.getElementById("tableUser");
//   var tableCompany = document.getElementById("tableCompany");
//   var tableOrganization = document.getElementById("tableOrganization");
//   var tableLocation = document.getElementById("tableLocation");
//   var tableJobtitle = document.getElementById("tableJobtitle");
//   tableUser.style.display = "none";
//   tableCompany.style.display = "table";
//   tableOrganization.style.display = "none";
//   tableLocation.style.display = "none";
//   tableJobtitle.style.display = "none";
//   btnCompany.classList.add("selected");
//   btnUser.classList.remove("selected");
//   btnOrganization.classList.remove("selected");
//   btnLocation.classList.remove("selected");
//   btnJobtitle.classList.remove("selected");
// }

// function showTableOrganization() {
//   var tableUser = document.getElementById("tableUser");
//   var tableCompany = document.getElementById("tableCompany");
//   var tableOrganization = document.getElementById("tableOrganization");
//   var tableLocation = document.getElementById("tableLocation");
//   var tableJobtitle = document.getElementById("tableJobtitle");
//   tableUser.style.display = "none";
//   tableCompany.style.display = "none";
//   tableOrganization.style.display = "table";
//   tableLocation.style.display = "none";
//   tableJobtitle.style.display = "none";
//   btnOrganization.classList.add("selected");
//   btnUser.classList.remove("selected");
//   btnCompany.classList.remove("selected");
//   btnLocation.classList.remove("selected");
//   btnJobtitle.classList.remove("selected");
// }
