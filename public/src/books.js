function findAuthorById(authors, id) {
  return authors.find(author => id === author.id);
}

function findBookById(books, id) {
  return books.find(book => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter(book => !book.borrows[0].returned);
  const returned = books.filter(book => book.borrows[0].returned);
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  for (let i = 0; i < book.borrows.length; i++) {
    let borrower = accounts.find(account => account.id === book.borrows[i].id);
    borrower.returned = book.borrows[i].returned;
    borrowers.push(borrower);
  }
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
