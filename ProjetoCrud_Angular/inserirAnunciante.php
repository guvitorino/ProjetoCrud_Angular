<?php
	include "conectar.php";
?>
<?php
    $redirect = "home.html";
	$nome = $_POST["nome"];
	$empresa = $_POST["empresa"];
    $email = $_POST["email"];
    $senha = md5($_POST["senha"]);

    $instrucao = 'INSERT into "Anunciante"(nome,empresa,email,senha) values('."'".$nome."','".$empresa."','".$email."','".$senha."')";
	pg_query($conect,$instrucao) or die(pg_last_error($conect));
   ?> <script>alert("Cadastro Realizado com Sucesso!");<script><?php
	pg_close($conect);
    header("location:$redirect");
?>