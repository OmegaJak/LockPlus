(function () {
    var div = document.createElement("div"),
        svDiv = document.createElement('div'),
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        circ1 = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        circ2 = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        style = document.createElement('style'),
        css,
        clock;

    svDiv.className = 'svgClock';
    div.id = 'Seconds';
    div.style.cssText = 'width:200px;height:200px;position:absolute;top:0;left:0;background-color:transparent;font-family:helvetica;';

    svg.style.cssText = 'pointer-events:none;position:absolute;top:0;left:0;';

    svg.setAttribute('width', 200);
    svg.setAttribute('height', 200);
    svg.setAttribute('class', 'chart');
    svg.setAttribute('data-percent', 90);


    circ1.setAttribute('id', 'circle');
    circ1.setAttribute('class', 'circle');
    circ1.setAttribute('cx', '95');
    circ1.setAttribute('cy', '95');
    circ1.setAttribute('r', '85');
    circ1.setAttribute('transform', 'rotate(-90, 95, 95)');


    circ2.setAttribute('id', 'bgcircle');
    circ2.setAttribute('class', 'bgcircle');
    circ2.setAttribute('cx', '95');
    circ2.setAttribute('cy', '95');
    circ2.setAttribute('r', '85');
    circ2.setAttribute('transform', 'rotate(-90, 95, 95)');


    style.type = 'text/css';
    css = '.bgcircle{pointer-events:none;fill:transparent;stroke:#444;stroke-width:5;}.svgClock{ -webkit-transform:translate(-105px, -220px)scale(0.8);}.circle{fill: transparent;stroke: white;stroke-width: 10;stroke-dasharray: 534;stroke-linecap: square;-webkit-transition: stroke-dashoffset 0.5s;}';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    svg.appendChild(circ2);
    svg.appendChild(circ1);
    svDiv.appendChild(svg);
    div.appendChild(svDiv);
    document.getElementById('screenElements').appendChild(div);


    function animateSVG(battery) {
        var circle = document.getElementById('circle'),
            radius = circle.getAttribute('r'),
            cc = Math.PI * (radius * 2),
            points;
        circle.style.strokeDashoffset = cc;

        if (battery < 0) {
            battery = 0;
        }
        if (battery > 100) {
            battery = 100;
        }
        points = ((100 - battery) / 100) * cc;
        circle.style.strokeDashoffset = points;
    }
    //animateSVG(50); //battery percent
    clock = function () {
        requestAnimationFrame(clock);
        var date = new Date(),
            s = date.getSeconds(),
            sp = 100 / 60 * s;
        animateSVG(sp);
    };
    setTimeout(function(){
        clock();
    },0)
}());