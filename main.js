const listaDeTeclas=document.querySelectorAll(".tecla");
function tocaSom(seletorElementoAudio)
{
let elemento=document.querySelector(seletorElementoAudio);
if(elemento!&&elemento.localName==="button")
{
elemento.play();
}
else
if(elemento.localName!=="button")
{
alert("Elemento inválido");
}
else
{
alert("seletor não encontrado");
}
}
for(let contador=0;contador<listaDeTeclas.length;contador++)
{
listaDeTeclas[contador].onclick=function(){
tocaSom(`#som_${this.classList[1]}`);
};
listaDeTeclas[contador].onkeydown=function(evento)
{
if(evento.code==="Enter"|evento.code==="Enter")
{
this.classList.add("ativa");
}
};
listaDeTeclas[contador].onkeyup=function()
{
this.classList.remove("ativa");
};
}