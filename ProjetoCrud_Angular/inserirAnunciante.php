<?php
	include "conectar.php";
?>
<?php
    $dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);

	$nome = $obj->nome;
	$empresa = $obj->empresa;
    $email = $obj->email;
    $senha = md5($obj->senha);

    $instrucao = 'INSERT into "Anunciante"(nome,empresa,email,senha) values('."'".$nome."','".$empresa."','".$email."','".$senha."')";
	pg_query($conect,$instrucao) or die(pg_last_error($conect));
	pg_close($conect);
?>