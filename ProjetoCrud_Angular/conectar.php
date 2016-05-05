<?php

	$conect = pg_connect("host=localhost dbname=BestOferta port=5432 user=postgres password=vitorino");
	if(!$conect)die("<h1>Falha ao conectar no banco");
?>