window.onload = function () {
  'use strict';

var click = document.querySelectorAll('form fieldset:first-child>label>input[type="radio"]');
var project = document.querySelector(".project");
var stage = document.querySelector(".stage");

for (var cl = 0; cl < click.length; cl++) {
  click[cl].addEventListener("change", function() {
      project.classList.toggle("show");
      project.classList.toggle("hide");
      stage.classList.toggle("show");
      stage.classList.toggle("hide");

  }); 
}

};