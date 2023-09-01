function writeCards(names, event) {
    let thankYouCards = []
    for(let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}


function countDown(anyNumber){
    while(anyNumber > 0) {
        console.log( anyNumber )
        anyNumber--;
    }
    console.log(anyNumber)
}


// function countDown( startingNumber ) {
//   while ( startingNumber > 0 ) {
//     console.log( startingNumber );
//     startingNumber -= 1;
//   }
//   console.log( startingNumber );
// }