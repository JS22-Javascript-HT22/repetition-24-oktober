function findBook(booksArr, searchTitle) {
    console.log('bookArr:', booksArr);
    console.log('title:', searchTitle);

    for(let i = 0; i < booksArr.length; i++) {
        //console.log('i:', i);
        //console.log(booksArr[i]);
        const book = booksArr[i]; // Plocka ut objektet ur array:en och spara i en variabel
        //console.log(book.title);
        if (book.title == searchTitle) {
            //console.log('Hittade boken:', book);
            return book;
        }
    }

    // Samma lösning fast med for-loop
    // for (const book of booksArr) {
    //     console.log('book:', book);
    //     if (book.title == searchTitle) {
    //         return book;
    //     }
    // }

    return null;
}

function searchBooks() {
    let books = [
        { title: 'Alice in Wonderland', author: 'Lewis Carroll', numPages: 250 },
        { title: "Hitchhiker's guide to the galaxy", author: 'Douglas Adams', numPages: 500 },
        { title: 'Winnie the pooh', author: 'A.A Milne', numPages: 120 },
        { title: 'The Red House Mystery', author: 'A.A Milne', numPages: 280 }
    ];

    const searchResult = findBook(books, 'The Red House Mystery');
    console.log(searchResult);
}

searchBooks();

/**
 * 1. Loopa ut vår sträng i en for-loop
 * 2. Om vi hittar tecknet för första gången lägg till det i objektet med värde 1
 * 3. Ifall vi redan har hittat första förekomsten av tecknet, addera med 1
 */

function letterFrequency(text) {
    let result = {};

    for(let char of text) {
        console.log(char);
        if (result[char] == undefined) {
            result[char] = 1;
        } else {
            result[char] = result[char] + 1; // En kortare variant result[char]++;
        }
    }

    console.log(result);
}

letterFrequency('christoffer');