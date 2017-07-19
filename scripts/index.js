function fix_menu() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop();

   if (w < 993 && w > 600) {
      if (top > 100) {
       document.getElementById("topnav").style.position = "fixed";    
        document.getElementById("topnav").style.top = "0";  
      } else {
        document.getElementById("topnav").style.position = "relative";
      }
    } else {
      if (top > 66) {
        document.getElementById("topnav").style.position = "fixed";
        document.getElementById("topnav").style.top = "0";
         } else {
         document.getElementById("topnav").style.position = "relative";
         }
  }

}

function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}

function getStyleValue(elmnt,style) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elmnt,null).getPropertyValue(style);
  } else {
    return elmnt.currentStyle[style];
  }
}