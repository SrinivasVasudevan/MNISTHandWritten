<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

</head>

<h1 id="result"></h1>>
<body>
<div class="sidebar">
    <ul>
        <li>
            <label for="color">Color:</label>
            <input type="color" id="color"/>
        </li>
        <li>
            <label for="weight">Stroke:</label>
            <input type="number" id="weight" min="2" max="200" value="3"/>
        </li>

    </ul>
    
</div>



<button id="clear">clear</button>
<button id="predict">predict</button>

<script src="sketch.js"></script>
<script>
    
    $("#predict").click(function(){
	   			$('#result').text('  Predicting...');
	   			var $SCRIPT_ROOT = "";
	   			var canvasObj = document.getElementById("canvas");
	   			var img = canvasObj.toDataURL('image/png');
	   			$.ajax({
	   				type: "POST",
	   				url: $SCRIPT_ROOT + "/predict/",
	   				data: img,
	   				success: function(data){
	   					$('#result').text('Predicted Output: ' + data);
	   				}
	   			});
	   		});
	   

</script>


</body>                             
</html>