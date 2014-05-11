/* params {string}
 */

function sortNumToArray(num){
	var i = num, arr = [];
	if (typeof i !== 'number') {return 'this is not a number';}
	do {
		arr.unshift(i%10);
		i = Math.floor(i/10);
	}
	while(i > 0);
	return arr;
}

function isSelfNum(num){
	
	var arr = sortNumToArray(num);
	
	if (typeof arr === 'string') {
		return 'Check please,it is string';
	}

	for(var i = 0, len = arr.length;i<len;i++){
    	var sameNum = 0;
    
    	for(var j = 0;j<len;j++){
        	if (arr[j] === i) {
        	sameNum++;
        	}
    	}
    
    	if (sameNum !== arr[i]) {
    		return 0;
    	}
	
	}
	return 1;
}

