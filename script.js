function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var secondI,secondD,secondS

    // Read and save an integer, double, and String to your variables.
    secondI = 4
    secondD = 4.0
    secondS = 'Here!'

    // Print the sum of both integer variables on a new line.
    console.log(i +parseInt(secondI))
    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d + secondD).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s+secondS)
}

main()