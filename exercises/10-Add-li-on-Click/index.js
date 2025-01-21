let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let cli = document.createElement("li");
	cli.innerHTML = "NewElement";
	let myList = document.getElementById("myList");
	myList.appendChild(cli);
});
