const listaDeTeclas=document.querySelectorAll(".tecla");
function tocaSom(idElementoAudio)
{
document.getElementById(idElementoAudio).play();
}
for(let contador=0;contador<listaDeTeclas.length;contador++)
{
listaDeTeclas[contador].onclick=function(){
tocaSom(`som_${this.classList[1]}`);
};
}
