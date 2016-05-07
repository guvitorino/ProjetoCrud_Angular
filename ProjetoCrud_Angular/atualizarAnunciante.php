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
    $id = $obj->id;
    
    $instrucao = 'UPDATE "Anunciante" SET  nome='."'".$nome."', empresa='".$empresa."', email='".$email."', senha='".$senha."' WHERE idanunciante=".$id;
	pg_query($conect,$instrucao) or die(pg_last_error($conect));
	pg_close($conect);
?>