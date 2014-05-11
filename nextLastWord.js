/* find the word next to last word
 * input {string} hello word! i love you!
 * out {string} love
 */

function findNextToLastWord(string) {
    if (typeof string !== 'string') return;

    var str = string;
        strArray = str.split(' '),
        len = strArray.length;

    if (len > 1) {
        return strArray[len-2];
    } else {
        return 'no word next to the last word!';
    }
}
