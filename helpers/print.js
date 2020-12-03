module.exports = function print (items) {
    console.log("")
    console.log("*****************************")
    console.log(`Printing ${items.length} Items!`)
    console.log("*****************************")
    items.forEach(item => console.log(item));
    console.log("*****************************")
}