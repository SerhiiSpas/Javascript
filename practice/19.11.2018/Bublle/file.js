var number = [11,3,8,9,33,2,1,6,15,22];

document.write("Incoming block : " +number+ "<br>");

for(let y=0; y<number.length-1; y++) {
        let timeOver = 0;
        for( let i=0; i<number.length-1; i++) {
                 if(number[i] > number[i+1]) {
                    timeOver = number[i];
                     number[i] = number[i+1];
                      number[i+1] = timeOver;
                 }
        }
}

document.write("<br> Sorted block : " + number);