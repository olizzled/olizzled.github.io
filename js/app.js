function setup() {

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 600;
    canvas.width = 600;
    //PEGAR AQUI SUS CAMBIOS

    
    //CUERPO

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(350, 50);
    ctx.lineTo(350, 350);
    ctx.lineTo(50, 350);
    ctx.lineTo(50, 50);
       ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "#fff56c";
    ctx.fill();
    ctx.closePath();


    //OJOS 

    //OJO IZQ
    ctx.strokeStyle = "#aead0d";
    ctx.lineWidth = 10;
    ctx.beginPath();   
    ctx.arc(140, 120, 50, 0, (Math.PI) * 2, true);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // //OJO DER
    ctx.strokeStyle = "#aead0d";
    ctx.lineWidth = 5;
    ctx.beginPath();  
    ctx.arc(260, 120, 50, 0, (Math.PI) * 2, true);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.fill();


    //NARIZ
    ctx.strokeRect(190, 180, 150, 20);
    ctx.stroke();


    //boca
    ctx.beginPath();
    ctx.arc(200, 220, 80, 0, (Math.PI));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100,220);
    ctx.lineTo(140,220);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(260,220);
    ctx.lineTo(300,220);
    ctx.stroke();




    ctx.beginPath();
    ctx.arc(140, 120, 20, 0, (Math.PI / 180) * 360, true);
    ctx.fillStyle = "#3cbbdf";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(140, 120, 10, 0, (Math.PI / 180) * 360, true);
    ctx.fillStyle = "#000000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(260, 120, 20, 0, (Math.PI / 180) * 360, true);
    ctx.fillStyle = "#3cbbdf";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(260, 120, 10, 0, (Math.PI / 180) * 360, true);
    ctx.fillStyle = "#000000";
    ctx.fill();




}