
function fix(response){
  let numberArray = []
  let testSplit = response.split("");
  for (let x=0; x < testSplit.length ; x++) {
    let index = parseInt(testSplit[x])
    if (Number.isInteger(index)) {
      numberArray.push(index)
    }
  }
  let num = numberArray.join('')
  return num
}

let guestsPrompt = prompt("How many guests do you want?");
let tablesPrompt = prompt("How many tables do you want?");

let guests = fix(guestsPrompt)
let tables = fix(tablesPrompt)

let gptable = parseInt(guests/tables)
let extras = guests%tables


let final = ('Your' + guests + 'will be seated as follows: ' + (tables-extras) + 'tables of' + gptable + ', and' + extras + 'tables of' + (gptable + 1))

alert(final)



