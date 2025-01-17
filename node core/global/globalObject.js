
// Global objects are always available in all modules and do not require importing. 

// __dirname - 

// Represents the absolute path of the directory containing the current module.
console.log(__dirname); // Output: /Users/YourName/ProjectFolder

// __filename - 

// Represents the absolute path of the current module file.
console.log(__filename); // Output: /Users/YourName/ProjectFolder/index.js

// process - 

// Provides information and control over the current Node.js process.

console.log('\n \tprocess.env \n');


console.log(process.env); // Environment variables

console.log('\n \tprocess.argv \n');
console.log(process.argv); // Command-line arguments

console.log('\n \tprocess.platform \n');

console.log(process.platform); // Current platform (e.g., 'win32', 'darwin', 'linux')

