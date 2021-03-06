/*
FOR WHEN I FORGET HOW TO MERGE TO MASTER 😂
  git checkout updates
  git pull origin master
  git checkout master
  git merge updates
  git push

*/

(function() {
    'use strict';
    init(json);
    setTimeout(function() {
        // document.getElementById('languageCradel').style.height = "300px";
    }, 1000);
}());

function init(json) {
    'use strict';
    var count = 0;
    var hellos = [];
    for (var i = 0; i < json.length; i++) {
        var str = json[i].Hello;
        if (typeof(str) !== 'undefined') {
            str = str.charAt(0).toUpperCase().toString() + str.slice(1, str.length);
            hellos.push(str);
        } else {
            str = "";
        }
    }

    // OBJECTS
    var language = document.getElementById("language");
    var newHelloInterval = window.setInterval(pushNewHello, 2000);

    // hoverBox.addEventListener("hover", test());
    // FUNCTIONS
    function pushNewHello() {
        // get all hellos for JSON object
        var sayHello = hellos[count] + ",";
        // language.innerHTML = sayHello + " I'm Kam.";
        language.innerHTML = sayHello
        language.className = "fadeIn";
        count++;
        if (count === hellos.length) {
            count = 0;
        }
    } // pushNewHello

    var footerInterval = window.setInterval(hideFooter, 1600);
    var navFooter = document.getElementById('navFooter');
    var userHasScrolled = false;

    window.onscroll = function(e) {
        userHasScrolled = true;
        document.querySelector('.mobileModal').style.opacity = 0;
        document.querySelector('.mobileModal').style.zIndex = -1;
    }

    function hideFooter() {
        navFooter.style.height = "20px";
        if (userHasScrolled) {
            // navFooter.style.transition = ".5s ease";
            // navFooter.style.height = "50px";
            // userHasScrolled = false;
        }
    }

    var focusQuery = document.querySelectorAll('.fullScreenHoverBox');

    var projectBlurbs = [];
    for (var i = 0; i < focusQuery.length; i++) {
      projectBlurbs[i] = focusQuery[i].parentNode.parentNode.children[0].children[0].innerHTML;
      focusQuery[i].id = i;
      focusQuery[i].addEventListener("click", function(e) {
              if (e.target.className == "fullScreenHoverBox") {
                var thisBlurb = Number(this.id);
                document.querySelector('.mobileModal').style.opacity = .9;
                document.querySelector('.mobileModal').style.zIndex = 10;
                document.getElementById('content').innerHTML = projectBlurbs[thisBlurb];
              }
          });
    }//loop
    console.log(projectBlurbs);
}
