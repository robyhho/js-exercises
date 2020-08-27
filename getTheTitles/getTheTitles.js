const getTheTitles = function(books) {
  const titles = books.map(books => books.title);
  return titles;
}

module.exports = getTheTitles;
