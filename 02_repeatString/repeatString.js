const repeatString = function (word, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let newString = "";
    for (let i =0; i < num; i++) {
        newString += word;
    }
    return newString;
};

module.exports = repeatString;
