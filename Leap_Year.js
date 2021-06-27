var year;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`enter the year `, value => {
    console.log(`the year is ${value}`)
    year = value;
    checkStatus(year)
    readline.close()
})
function checkStatus(year) {
    if (year%4 == 0) {
        if (year%100 == 0) {
            if (year%400 == 0) {
                console.log(year + " is a Leap Year")
            } else {
                console.log(year + " is Not a Leap Year")
            }
        } else {
            console.log(year + " is a Leap Year")
        }
    } else {
        console.log(year + " is Not a Leap Year")
    }
}