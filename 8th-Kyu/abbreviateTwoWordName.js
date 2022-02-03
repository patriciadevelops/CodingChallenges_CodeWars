// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let upper = name.toUpperCase();
    let firstName = upper.split(' ')
    return `${firstName[0][0]}.${firstName[1][0]}`
    }
