const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	// Initialize a count variable to keep track of the number of books read
  let count = 0;

  // Iterate through the books in the library
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus of the current book is true (read)
    if (library[i].readingStatus === true) {
      // Increment the count if the book has been read
      count++;
    }
  }

  // Return the total count of books that have been read
  return count;
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
