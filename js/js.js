var i = 0;
// var A = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 50;

    function typeWriter() {
      tag.style.opacity = 1;  
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
        //console.log(document.getElementById("text").innerHTML);
    }

    setTimeout(typeWriter,15000);

    var i1 = 0;
// var A = 0;
    var tag1 = document.getElementById("text2");
    var html1 = document.getElementById("text2").innerHTML;
    var attr1 = tag1.setAttribute("data", html1);
    var txt1 = tag1.getAttribute("data");
    var speed1 = 50;

    function typeWriter1() {
      tag1.style.opacity = 1;  
      if (i1 <= txt1.length) {
        document.getElementById("text2").innerHTML = txt1.slice(0 , i1 + 1);
        i1++;
        setTimeout(typeWriter1, speed1);
      }
        //console.log(document.getElementById("text").innerHTML);
    }

    setTimeout(typeWriter1,30000);