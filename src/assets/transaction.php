<?php

	if (isset($_POST["transactionToken"])) {
		$transaction = $_POST["transactionToken"];
		$purchase = $_GET["purchase"];
		$amount = $_GET["amount"];
		$url = "http://localhost:4200/finalizar/".$transaction."/".$purchase."/".$amount;
		header ('location: '.$url);
	}