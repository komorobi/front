function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastNode == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function showPic (whichpic) {
  if(!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  //if(placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src", source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstCild.nodeType == 3) {
    description.firstCild.nodeValue = text;
  }
  return false;
}
addLoadEvent(prepareGallery);
addLoadEvent(pareparePlaceholder);

function prepareGallery() {
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for(var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
    }
  }
}

function pareparePlaceholder() {
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/light.jpg");
  placeholder.setAttribute("alt", "my image gallery");
  var description = document.createElement("p");
  description.setAttribute("id", "description");
  var destext = document.createTextNode("Choose an image");
  description.appendChild(destext);
  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}