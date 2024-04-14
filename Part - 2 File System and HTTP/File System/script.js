const fs = require('fs');


// 1. writeFile --> To write in a file
/*
fs.writeFile("hey.txt", "Data to be entered in the file", function(err){
    if(err) console.error(err);
    else console.log("Done");
})
*/

// 2. appendFile --> To append in a file
/*
fs.appendFile("hey.txt", "\nThis is to append in a file", function(err){
    if(err) console.error(err);
    else console.log("Done");
})
*/

// 3. rename --> To rename a file
/*
fs.rename("hey.txt", "hello.txt", function(err){
    if(err) console.error(err);
    else console.log("Rename Done");
})
*/

// 4. copyFile --> To copy file in a folder
/*
fs.copyFile("hello.txt", "./copy/newHello.txt", function(err){
    if (err) console.error(err);
    else console.log("Done copying")
})
*/

// 5. unlink --> To delete a file
/*
fs.unlink("hello.txt", function(err){
    if(err) console.error(err);
    else console.log("Deleted file!!");
})
*/


// 6. rmdir --> To remove a directory

//      --> To remove empty directory use (rmdir)
/*
fs.rmdir("./new", function(err){
    if(err) console.error(err);
    else console.log("Done deleting empty folder")
})
*/

//      --> To remove directory having a file inside it use  (rm)
/*
fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("Deleted folder having files")
})
*/