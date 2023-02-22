function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++){
        if (word[i] == match) {
            console.log('found match at: ', match ,i);
        }
        else {
            console.log('no match found');
        }
    }
}

letterFinder('test', 't')