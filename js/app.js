function setup() {

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    //PEGAR AQUI SUS CAMBIOS
ctx.strokeRect(0, 0, 300, 300);
ctx.strokeStyle = 'rgb(0, 0, 0)';
ctx.strokeRect(60, 50, 50, 80);
ctx.strokeRect(190, 50, 50, 80);
ctx.strokeRect(130, 150, 100, 20);
ctx.strokeRect(100, 200, 100, 1);

ctx.arc(90,90,20,0,(Math.PI/180)*360,true);
ctx.fillStyle="#3cbbdf";
ctx.fill();
ctx.arc(220,90,20,0,(Math.PI/180)*360,true);
ctx.fillStyle="#3cbbdf";
ctx.fill();
ctx.beginPath();
ctx.arc(90,90,10,0,(Math.PI/180)*360,true);
ctx.fillStyle="#000000";
ctx.fill();
ctx.arc(220,90,10,0,(Math.PI/180)*360,true);
ctx.fillStyle="#000000";
ctx.fill();
ctx.finishpath();
}
