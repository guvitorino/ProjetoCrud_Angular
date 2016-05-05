<?php
	include "conectar.php";
?>
<?php
	$sql = 'DELETE from "Anunciante" where idanunciante='.$_POST[id];  
	$sql_query = pg_query($conect,$sql) or die(pg_last_error($conect));
	pg_close($conect); 
	setcookie("nome", "", time()-3600);
	setcookie("logado", "", time()-3600);
	setcookie("id", "", time()-3600);
	unset($_COOKIE['nome']);
	unset($_COOKIE['logado']);
	unset($_COOKIE['id']);
?>
<script type="text/javascript"> alert("Seus dados foram deletados!");
window.location.replace('home.html'); </script>