function Anunciante(vnome,vempresa,vemail,vsenha,id){
			this.nome =  vnome;
			this.empresa =  vempresa;
			this.email =  vemail;
			this.senha =  vsenha;
			this.id = id;
}

function carregaTabela(){
  $.ajax({
        url : "pegarAnunciantes.php",
        dataType : "json",
        success : function(data){
             
            for(var i=0; i < data.length; i++){
              $("#tabela > tbody").append("<tr id='a"+(data[i].id )+"'><td>"+data[i].nome +"</td><td>"+data[i].email +"</td><td><a class='deletar' data-index="+(data[i].id )+"><span class='glyphicon glyphicon-trash'></span></a></td></tr>");

            }
            $('.deletar').on('click', function(){
              del($(this).attr('data-index'));
            });
        }
    });
}

var lista = [];
$(document).ready(function(){

  carregaTabela();

  $("#cadastro").submit(function(){
    $('#load').show();
  	var nome = document.getElementById("txtnome").value;
  	var nomeempresa = document.getElementById("txtnomeempresa").value;
  	var email = document.getElementById("txtemail").value;
  	var senha = document.getElementById("txtsenha").value;
  	var val = 1;

  	if(nome.trim() == ""){
  		$('#txtnome').addClass("erro");
    	val = 0;
    }else $('#txtnome').removeClass("erro");

    if(nomeempresa.trim() == ""){
    	$('#txtnomeempresa').addClass("erro");
    	val = 0;
    }else $('#txtnomeempresa').removeClass("erro");

    if(email.trim() == ""){
    	$('#txtemail').addClass("erro");
    	val = 0;
    }else $('#txtemail').removeClass("erro");

    if(senha.trim() == ""){
    	$('#txtsenha').addClass("erro");
    	val = 0;
    }else if(senha.length<6){
    	$('#txtsenha').addClass("erro");
    	$('.msgerrosenha').show();
    	val = 0;
    }else{ $('#txtsenha').removeClass("erro");$('.msgerrosenha').hide();}

    if(!$("#chtermo").is(":checked")){
      $('.msgtermo').show();
      val = 0;
      //return false;
    }else{
    	$('.msgtermo').hide();
    }

    if(val == 0){
    	$('.msgerro').show();
    	return false;
    }else{
    	$('.msgerro').hide();
    	lista.push(new Anunciante(nome,nomeempresa,email,senha,lista.length))
    //	$("#tabela > tbody").append("<tr id='a"+(lista.length-1)+"'><td>"+nome+"</td><td>"+email+"</td><td><a class='deletar' data-index="+(lista.length-1)+"><span class='glyphicon glyphicon-trash'></span></a></td></tr>");
      
      $.post( "inserirAnunciante.php", { nome: nome, empresa: nomeempresa, email: email, senha: senha })
        .done(function( data ) {
          alert( "Cadastro realizado com sucesso!");
          $('#load').hide();
        });
        carregaTabela();
     	$("#cadastro").trigger("reset");
     	/*$(document).ready(function(){
     		$('.deletar').on('click', function(){
     			del($(this).attr('data-index'));
     		});
     	});*/
     	return false;
    }
    return false;
  });

 /* $("#btnhomecadastrar").click(function(){
	 window.location.replace('anunciar.php'); 
  });*/
  
});

function del(id){
	$.post( "deletaAnunciante.php", { id:id })
        .done(function( data ) {
          alert( "Cadastro deletado com sucesso!");
        });
	$("#a"+id).remove();
}