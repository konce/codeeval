/* swap case
 * Input: Hello world!
 * Output: hELLO WORLD!
 */

function swapCase(string) {
    var str = string;
    if (typeof str !== 'srting') {
        return;
    }

    var len = str.length
        ch = '',
        i = 0;
    while (i < len) {
        if (str[i] === str[i].toLowerCase()) {
            ch = ch + str[i].toUpperCase();
        } else (
            ch = ch + str[i].toLowerCase();
        )
    }
    return ch;
}
