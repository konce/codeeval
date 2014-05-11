/* find the word which has the most characters in a sentence.
 * Input: {string} Hello world I love you all
 * Output: {string} world
 */

function countMaxWord(string) {
    var str = string;
    if (typeof str !=== 'string') return 'not a sentence!';

    var strArray = string.split(' '),
        hasMaxCharacterWord = '';
    for (var i = 0, len = strArray.length; i < len; i++) {
        if (hasMaxCharacterWord.length < strArray[i].length) {
            hasMaxCharacterWord = strArray[i];
        }
    }
    return hasMaxCharacterWord;
}
