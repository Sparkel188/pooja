//7. Implement your own search function for strings. dont use builtin function
// input text = "Hello, how are you?", searchTerm = "how";
// output = 'Search term found at index: 7'

function searchString(string, search) {
    for (let i = 0; i <= string.length - search.length; i++) {
      let found = true;
      for (let j = 0; j < search.length; j++) {
        if (string[i + j] !== search[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
    return -1;
  }
  
  let text = "Hello, how are you?";
  let searchTerm = "how";
  
  let index = searchString(text, searchTerm);
  if (index !== -1) {
    console.log("Search term found at index:", index);
  } else {
    console.log("Search term not found.");
  }
  