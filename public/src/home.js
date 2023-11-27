function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowCount = books.filter(book => !book.borrows[0].returned);
  return borrowCount.length
}

function countGenre(books) {
  return books.reduce((counts, book) => {
    counts[book.genre] = counts[book.genre] ? counts[book.genre] + 1 : 1;
    return counts;
  }, {});
}

function getMostCommonGenres(books) {
  let counts = countGenre(books);
  let mostCommon = [];
  for (const [key, value] of Object.entries(counts)) {
    mostCommon.push({
      name: key,
      count: value,
    });
  }
  mostCommon.sort((a, b) => b.count - a.count);
  return mostCommon.slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map(book => {
    return {name: book.title, count: book.borrows.length};
  }).sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popular = [];
  authors.forEach(author => {
    let popAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        popAuthor.count += book.borrows.length;
      }
    })
    popular.push(popAuthor)
  })
  return popular.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
