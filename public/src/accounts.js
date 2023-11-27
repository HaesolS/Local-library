function findAccountById(accounts, id) {
  return accounts.find(account => id === account.id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) =>
    lastA.name.last > lastB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let borrows = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        borrows++;
      }
    }
  }
  return borrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned))
  .map(book => {const author = authors.find(author => author.id === book.authorId)
    book.author = author;
    return book;
})
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
