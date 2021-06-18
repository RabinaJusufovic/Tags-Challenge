//Here i take the text parsed from the link, ignore the breaks and store the data 

module.exports = function wordCount(data){
    var wordCount = {};
    var words = data.split(/\b/);

    for(var i=0; i<words.length; i++)
        wordCount["_"+words[i].toLowerCase()] = (wordCount["_"+words[i]] || 0)+1;

    console.log(wordCount);
    return wordCount;
}