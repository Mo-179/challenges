console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "post";
const text = "content";
let like = 10;
const user = "user name";
const isReporter = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("Title", title);
console.log("Post content: ", text);
console.log("Likes: ", like);
console.log("Useer name:", user);
console.log("Reporter: ", isReporter);

console.log("Likes: ", (like += 1));

// --^-- write your code here --^--
