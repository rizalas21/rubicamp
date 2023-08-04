function spiral(param1) {
    var arr = [];
    var col = 0;
    var row = 0;
    var colEnd = param1 - 1 ;
    var rowEnd = param1 - 1 ;
    var penampung = 0;

    for(let h = 0; h < param1; h++) {
        arr.push([]);
    }
    
    for(let i = 0; i < param1; i++) {
        for(let j = 0; j < param1; j++){
            arr[i][j] = penampung;
            penampung++;
        }
    }
    let kurung = [];
    while(col <= colEnd && row <= rowEnd) {

        for(let i = col; i <= colEnd; i++) {
            kurung.push(arr[row][i])
        }
        row++;

        
        for(let i = row; i <= rowEnd; i++) {
            kurung.push(arr[i][colEnd])
        }
        colEnd--;

        if(row <= rowEnd)   
        for(let i = colEnd; i >= col; i--) {
            kurung.push(arr[rowEnd][i])
        }
        rowEnd--;

        if(col <= colEnd) {
            for(let i = rowEnd; i >= row; i--) {
            kurung.push(arr[i][col])
            }
        col++;
        }
    }
    return kurung;
}


console.log(spiral(5))
// console.log(spiral(6))
// console.log(spiral(7))

/* result [0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5,6,7,8,13,18,17,16,11,12]
[0,1,2,3,4,5,11,17,23,29,35,34,33,32,31,30,24,18,12,6,7,8,9,10,16,22,28,27,26,25,19,13,14,15,21,20]
[0,1,2,3,4,5,6,13,20,27,34,41,48,47,46,45,44,43,42,35,28,21,14,7,r8,9,10,11,12,19,26,33,40,39,38,37,36,29,22,15,16,17,18,25,32,31,30,23,24]
*/