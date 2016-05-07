<?php
	include "conectar.php";
?>
<?php
    $instrucao = 'select * from "Anunciante"';
	$resu = pg_query($conect,$instrucao) or die(pg_last_error($conect));
	$obj = array();
    if($resu){
		while($row = pg_fetch_array($resu) ){
			array_push($obj, array(
				"nome"=>$row["nome"],
		        "email"=>$row["email"],
		        "empresa"=>$row["empresa"],
		        "senha"=>$row["senha"],
		        "id"=>$row["idanunciante"]));
		}
	}
	pg_close($conect);  
	echo json_encode($obj);
?>