function getUpperCase(str) {
    return str.toUpperCase()
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getSentenceCase(str) {
    const sentence = getUpperCase(str[0]) + getLowerCase(str.slice(1));
    return sentence;
}

function getProperCase(str) {
    const words = str.split(' ');
    const newWords = [];

    for (const word of words) {
        newWords.push(getSentenceCase(word));
    }

    const sentence = newWords.join(" ");

    return sentence;
}

console.log(getProperCase("I love Eating"));
console.log(getProperCase("HELLO WORLD"));
console.log(getProperCase("JunGLE jusTiCE"));

module.exports = {
  getUpperCase, getLowerCase, getSentenceCase, getProperCase
};