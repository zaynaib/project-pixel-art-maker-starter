//variable
//resources
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

$(document).ready(function() {
	var column;
	var row;
	var color;

	//black is default color
	color = $('input[type=color]');
	var bgColor = color.val();
	console.log(bgColor);

	//on change change color of color picker
	color.on('change', function() {
		bgColor = color.val();
	});

	console.log(bgColor);

	$('input[type=submit]').on('click', function(event) {
		event.preventDefault();

		row = $('#inputHeight').val();
		column = $('#inputWeight').val();
		//console.log(row)
		//console.log(column)
		for (var i = 0; i < row; i++) {
			$('#pixelCanvas').append('<tr></tr>');
			//console.log("row created!")

			for (var j = 0; j < column; j++) {
				$('#pixelCanvas')
					.children()
					.last()
					.append('<td></td>');

				//console.log("column created")
			} //end for loop for column
		} //for loop for rows
	}); // end of funtion

	//change the color of the cell
	$('#pixelCanvas').on('click', 'td', function() {
		//$(this).css({"background-color":"red"})
		$(this).css({ 'background-color': 'red' });
		console.log('Its been clicked');
	});

	//$("ul").find("span").css({"color": "red", "border": "2px solid red"});

	function makeGrid() {
		// Your code goes here!
	}
});
