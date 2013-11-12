var wordlist;
var sortedWordList;
var anagrams = {};


function updateAnagrams(){
	content = ''
	for (var a in anagrams) {
		content += '<p>'+ a + ':'+ anagrams[a] +'</p>'
		$('div#anagrams').html(content)
	}
}

function findAnagram(words){
	for(i = 0; words.length > i; i++){
		anagrams[wordlist[i]] = 0
		for(w = 0; sortedWordList.length > w; w++ ){
			if (words[i] == sortedWordList[w]){
				anagrams[wordlist[i]] += 1
				updateAnagrams()
			}
		}
	}
	console.log(anagrams)
}


function sortAlpha(wordArr){
	wordArr.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
})
	return wordArr
}

function sortWordList(words){
	var canWordList = [];
	for (var i = 0; words.length > i; i++){
		var sorted = sortAlpha(words[i].split(""))
		canWordList.push(sorted.join("").toLowerCase())
	}
	return canWordList;
}

function processWordList(words){
	var wList = []
	for(i = 0; words.length > i; i++){
  	wList.push($(words[i]).text());
  }
  return wList;
}


function getWordList(){
	return $('#left-col p')
}



$(document).ready(function() {
  wordlist = processWordList(getWordList());
  sortedWordList = sortWordList(wordlist);
  findAnagram(sortedWordList)
});
