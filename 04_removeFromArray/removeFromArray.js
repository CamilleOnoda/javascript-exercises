const removeFromArray = function(array, ...args) {
    for (let str of args) {
        const index = array.indexOf(str);
        if (index !== -1) {
            array.splice(index,1);}
        }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
