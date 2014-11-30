window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 50);
        };
      });


$(document).ready(function() {
    var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
    var sleep = (function (milliseconds) {
          var start = new Date().getTime();
          for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
              break;
            }
          }
    });

    console.log("Hello");

    var drawScale = (function(s){
        //vertical
        $('#myCanvas').drawLine({
          strokeStyle: '#000',
          strokeWidth: 5,
          x1: 50, y1: 620,
          x2: 50, y2: 10
        });


        //horizontales
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 560,
          x2: 35, y2: 560
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 60,
          fontSize: 18,
          text: '100'
        });

        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 504.5,
          x2: 35, y2: 504.5
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 115.5,
          fontSize: 18,
          text: '90'
        });

        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 449,
          x2: 35, y2: 449
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 171,
          fontSize: 18,
          text: '80'
        });

        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 393.5,
          x2: 35, y2: 393.5
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 226.5,
          fontSize: 18,
          text: '70'
        });
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 338,
          x2: 35, y2: 338
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 282,
          fontSize: 18,
          text: '60'
        });
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 282.5,
          x2: 35, y2: 282.5
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 337.5,
          fontSize: 18,
          text: '50'
        });
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 227,
          x2: 35, y2: 227
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 393,
          fontSize: 18,
          text: '40'
        });
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 171.5,
          x2: 35, y2: 171.5
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 448.5,
          fontSize: 18,
          text: '30'
        });
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 116,
          x2: 35, y2: 116
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 504,
          fontSize: 18,
          text: '20'
        });
        $('#myCanvas').drawLine({
          strokeStyle: '#F00',
          strokeWidth: 2.5,
          x1: 60, y1: 60.5,
          x2: 35, y2: 60.5
        });
        $('canvas').drawText({
          //fillStyle: '#9cf',
          strokeStyle: '#25a',
          strokeWidth: 1,
          x: 13, y: 559.5,
          fontSize: 18,
          text: '10'
        });

    });


    var movePelota = (function(y){
            //580 en p es 0m
            //60 en p es 100m
            //$("canvas").clearCanvas();
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawScale(1);
            y /= 10;
            var pelotaY = 580-(y*55)+35;
            console.log(pelotaY);

            $("#myCanvas").drawArc({
                //draggable: true,
                fillStyle: "green",
                x:50, y : pelotaY,
                radius: 15
            });


        });

    $("#h").change(function(){
       movePelota($(this).val());

    });
    drawScale(1);
    $("#myCanvas").drawArc({
            //draggable: true,
            fillStyle: "green",
            x:50, y:580,
            radius: 15
    });
    $("#reiniciar").click(function(){
        location.reload();
    });
    $("#comenzar").click(function(){
        var conts = 0.05;
        console.log("clicked");
        var h = $("#h").val();
        var ds1 = $("#vi").val();
		var ds3 = $("#g").val(); // g
		var vf = Math.sqrt(Math.pow(ds1, 2) + 2 * ds3 * h);
		var tf = (vf-ds1)/ds3;
        console.log(conts);
        console.log(tf);
        //console.log(hh);
									//t = (vi-vf)/g

		var hh = ds1 * conts + ds3 * Math.pow(conts, 2)/2;


		var timer;
								timer = setInterval(function() { if (conts <= tf && hh > 0) {//


                                              console.log(123);

                                            hh = ds1 * conts + ds3 * Math.pow(conts, 2)/2;
                                            hh = h-hh;
                                            //h = 90.0 - h;
                                            console.log("////H:" + hh + " m //t:"+ conts+" s");
                                            $("#hLabel").html("Posici&oacute;n actual: " + hh + "m");
                                            $("#tLabel").html("Tiempo: " + conts + "s");
                                                                                //System.out.println("////V:" +  );
										//t2.start();

                                                                                //labell.setText("H: "+hh+" m");
                                                                                //labell2.setText("t: " + conts + " s");
										movePelota(hh);
										conts += 0.05;
                                        console.log("WTF?");
                                        $("canvas").delay(50); //es 50 el original



									} else { clearInterval (timer); } }, 50)//



    });




});