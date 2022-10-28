function setup() {

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 600;
    canvas.width = 600;
    //PEGAR AQUI SUS CAMBIOS

    //CUERPO

    ctx.beginPath();
    ctx.strokeRect(50, 50, 300, 300);
    ctx.fillStyle = "#fff56c";
    ctx.fill();

    //OJOS 

    //OJO IZQ
    ctx.arc(140, 120, 50, 0, (Math.PI) * 2, true);
    ctx.stroke();

    //OJO DER
    ctx.beginPath();
    ctx.arc(260, 120, 50, 0, (Math.PI) * 2, true);
    ctx.stroke();


    ctx.strokeRect(190, 180, 150, 20);

    ctx.beginPath();
    ctx.arc(200, 200, 80, 0, (Math.PI));
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

    // intento de brazos
    ctx.beginPath();
    ctx.lineTo(301, 100)
}
