function decimalToBinary(num) {
  //Write you code here
	let binaryNum = new Array(32);
	let i = 0;
    while (num > 0) {
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
 
    // printing binary array in reverse order
    for (let j = i - 1; j >= 0; j--)
        document.write(binaryNum[j]);
  
}

window.decimalToBinary = decimalToBinary;
