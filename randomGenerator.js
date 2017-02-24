function random() {
		var singleValue = obj[getRandom(obj.length)-1];
		var quoteValue = singleValue.quote;
		var authorName = singleValue.author;
		printQuotes(quoteValue);
		document.getElementById("author_id").innerHTML = '-'+authorName;

}

function getRandom(number){
	return Math.floor((Math.random() * number) + 1)
}

function printQuotes(text){
	document.getElementById("quotes").innerHTML=text;
	
}
