
function myFunction() {
  var element = document.getElementById("aboutMeID");
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function myFunction2() {
  var element2 = document.getElementById("heroImageID");
  element2.scrollIntoView();
  element2.scrollIntoView(false);
  element2.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

// function myFunction3() {
//   var element3 = document.getElementById("experienceViewID");
//   element3.scrollIntoView();
//   element3.scrollIntoView(false);
//   element3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
// }

// function myFunction4() {
//   var element4 = document.getElementById("contactMeID");
//   element4.scrollIntoView();
//   element4.scrollIntoView(false);
//   element4.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
// }

function hideMenuBar(){

// 	$('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });

// 	$("#navbar").on('show.bs.collapse', function() {
//     $('a.nav-link').click(function() {
//         $("#navbarSupportedContent").collapse('hide');
//     });
// });

	$(document).ready(function () {
     $(document).click(function (event) {
         var clickover = $(event.target);
         var _opened = $(".navbar-collapse").hasClass("show");
         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
             $(".navbar-toggler").click();
         }
     });
 });
}

