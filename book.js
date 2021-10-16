class Book {
    constructor(title, genre, author, read, readDate) {
        this.title = title
        this.genre = genre
        this.author = author
        this.read = read
        this.readDate = new Date(readDate)


    }
}



class BookList {
    constructor(){
       this.allBooks = [];
       
    }

    bookManager() {
        this.readBooks = [];
        this.unreadBooks = [];
        this.allBooks.filter((books) => {  
        if (books.read === true && books.read !== [...this.readBooks]) {
          this.readBooks = [...this.readBooks, books]
        } else {
             this.unreadBooks = [...this.unreadBooks, books];
             return(this.unreadBooks) }})
             }
    
    add (book) {
        this.allBooks = [...this.allBooks, book];
        this.bookManager();
        return (`Você adicionou: ${book.title}`)
    }
    

finishCurrent(){
    this.currentBook = this.unreadBooks[0]
    this.currentBook.read = true;
    this.currentBook.readDate = new Date(Date.now())
    this.bookManager()
    return (`Parabéns você terminou: ${this.currentBook.title}`)
}
}

let Dune =  new Book("Dune", "SciFi", "Frank Herbert", true, "october, 15, 2021");
let PercyJackson = new Book("Percy Jackson", "Fantasy", "Rick Riordan", false);
let HarryPotter = new Book("Harry Potter", "Fantasy", "J.K Rolling", false,);
let Sandman = new Book("Sandman", "Comic", "Neil Gaiman", true, "april, 6, 2018")
let lista = new BookList
lista.add(Dune)
lista.add(HarryPotter)
lista.finishCurrent()
lista