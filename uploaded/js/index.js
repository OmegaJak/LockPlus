var aniPath = function(id, speed) {
    var length = id.getTotalLength();
    id.style.transition = id.style.WebkitTransition =
        'none';
    id.style.strokeDasharray = length + ' ' + length;
    id.style.strokeDashoffset = length;
    id.getBoundingClientRect();
    id.style.transition = id.style.WebkitTransition =
        'stroke-dashoffset ' + speed + 's ease-in-out';
    id.style.strokeDashoffset = '0';
};

var getel = function () {
        var path, i;
        document.getElementById('image').className = "ani";
    for (i = 1; i < 7; i++) {
        path = document.getElementById('Path-' + i);
        aniPath(path, 2);
    }
};

window.onload = getel();

var clear = function(){
  var elm = document.getElementById('image'),
            newel = elm.cloneNode(true);
    elm.parentNode.replaceChild(newel, elm);
  getel();
};


document.getElementById('animations').addEventListener('click',clear);