var div = document.createElement("div");
div.id = 'Analog';


div.style.cssText = 'width:110px;height:110px;position:absolute;top:0;left:0;background-color:transparent;';
            var s = document.createElement('div');
            var m = document.createElement('div');
            var h = document.createElement('div');
            var center = document.createElement('div');
            var holder = document.createElement('div');
                s.id="s"
                m.className="transform";
                m.id="m"
                h.id="h";
                h.className="transform";
                center.id="center";
                center.style.cssText = "position:absolute;left:45px;top:45px;width:10px;height:10px;background-color:transparent;border-radius:100%;";
                holder.className="clock";
                holder.style.cssText = "position:absolute;top:2px;left:2px;width:100px;height:100px;background-color:rgba(0,0,0,0);border:2px solid white;border-radius: 100%;background-size: 100px;"
                holder.appendChild(s);
                holder.appendChild(m);
                holder.appendChild(h);
                holder.appendChild(center);
                div.appendChild(holder);
                function tick(){
      with(new Date()){
        var h, m, s;
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();
         document.getElementById('s').style.cssText="-webkit-transform:rotate("+s+"deg);top:9px;background-color:transparent;height:40px;width:2px;position:absolute;left:49px;-webkit-transform-origin:bottom;";
         document.getElementById('m').style.cssText="-webkit-transform:rotate("+m+"deg);top:19px;background-color:white;height:30px;width:2px;position:absolute;left:49px;-webkit-transform-origin:bottom;";
         document.getElementById('h').style.cssText="-webkit-transform:rotate("+h+"deg);top:24px;background-color:white;height:25px;width:2px;position:absolute;left:49px;-webkit-transform-origin:bottom;";
         setTimeout(tick, 1000);
      }
    }
    setTimeout(tick,0);

document.getElementById('screenElements').appendChild(div);