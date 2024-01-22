function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function displayAbbreviations() {
  if(!document.getElementsByTagName || !document.getAttribute || !document.createElement || !document.createTextNode) return false;
  
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
  for (var i = 0; i < abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    //alert(abbreviations[i]);
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
  
  var dlist = document.createElement("dl");
  for (key in defs) {
    var definition = defs[key];
    var dtitle = document.createElement("dt");
    var dt_text = document.createTextNode(key);
    dtitle.appendChild(dt_text);
    var ddesc = document.createElement("dd");
    var dd_text = document.createTextNode(definition);
    ddesc.appendChild(dd_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  
  var header = document.createElement("h2");
  var header_text = document.createTextNode("abbreviations");
  header.appendChild(header_text);
  
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}
window.onload = displayAbbreviations;
//addLoadEvent(displayAbbreviations);