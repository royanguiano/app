/*
function getUsers(value){

setInterval(function(){
console.log('testing'); 
	$.post('php/getUsers.php', 
		{
			partUser:value
		}, 
		function(data){
			$('result').html(data); 
	}); 
	}, 2000); 
}
*/

var timeout;
$('#searchInput').on("keyup", function() {
    var term = $(this).val();
    var $resultDropdown = $(".result");

    clearTimeout(timeout);
    
    timeout = setTimeout(function() {
        if (term.trim().length) {
            $.post("php/getUsers.php", 
            	{ 
            		partUser: term 
            	}).done(function(data) {
                $resultDropdown.html(data);
            });
        } else {
            $resultDropdown.empty();
        }
    }, 250);
});