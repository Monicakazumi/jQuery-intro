
$(document).ready(function(){
    //adicionar css
    $("#lista").css("color","red");


    //adiconando html - quando mencionado a classe element, chama a mensagem
    $('.element').html("Menu texto via jquery");


    //todos que estiverem dentro da tag "a", quando clicar, vai aparecer o alert
    $("a").click(function(){
        alert("Olá Mundo")
    })
    
})
//criando função
function pegarvalor(){
    var nome = document.querySelector('.nome').value;
    var sobrenome = document.querySelector('.sobrenome').value;

    alert("Seja Bem Vindo " + nome + " " + sobrenome);
    console.log(nome);

}