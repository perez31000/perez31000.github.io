// Animation fond du site

/*function generate() {
  var div = document.getElementById("div");
	div.innerHTML = '';
  var section = document.createElement('section');
  for(var i = 1; i < 40; i++) {
  	var elt = document.createElement('div');
    elt.id = 'div' + i;
    elt.style.width = Math.random() * 50 + "px";
    elt.style.height = Math.random() * 50 + "px";
    elt.style.borderRadius = Math.random() * 50 + "px";
    elt.style.backgroundColor = '#' + Math.random().toString(16).substr(2,6);
    elt.style.position = "absolute";
    elt.style.opacity = "0.1";
    elt.style.top = Math.random() * 1000 + "px";
    elt.style.left = Math.random() * 1000 + "px";
    elt.classList.add('animation');
    section.append(elt);
  }
  div.append(section);
}
setInterval(generate, 2000);*/

// Animation carrousel 

var i = 0;
var selected = documet.getElementById("icon_site"+i);

if(selected === :active){
	document.getElementById("sample_site"+i).classList.remove("hidden").classList.add("visible");
}


