//Print a table containing multiplication tables


function sumTable(table, index) {
    let sum = 0;
    for (let i = 0; i < table.length; i++) {
      if (index >= 0 && index < table[i].length) {
        sum += table[i][index];
      }
      else if (index < 0 && -index < table.length) {
        sum += table[table.length + index][i];
      }
    }
    return sum;
  }
 const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
const sumCol1 = sumTable(table, 0);
const sumRow2 = sumTable(table, -1);
console.log(sumCol1);
console.log(sumRow2);


//Print a table containing multiplication tables

for (let i =1; i <=12; i++){
    let row = ' ';
    for (let x = 1;x <=12; x++){
        row += (i * x ) + '\t';
    }
    console.log(row);
}
