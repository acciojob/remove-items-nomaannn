//your JS code here. If required.
function rm() {
	let colorSelect = document.getElementById('colorSelect')
	 // Get the selected option from the dropdown list
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // Remove the selected option from the dropdown list
  colorSelect.removeChild(selectedOption);
}