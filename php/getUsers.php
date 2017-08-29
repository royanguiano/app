<?php 
	
	mysql_connect('localhost', 'royanguiano2016', 'whatsup12.') or die(mysql_error()); 
	mysql_select_db('tuborrowUsersDB') or die(mysql_error()); 

	$partUser = $_POST['partUser']; //storing ajax value here

	$row = mysql_query("SELECT * FROM users WHERE background LIKE '%$partUser%'"); 


	while($nameArray = mysql_fetch_array($row)){	//creating array out of the result query statment 
		echo "<div>".$nameArray['firstname']."</div>"; 
	}
?>