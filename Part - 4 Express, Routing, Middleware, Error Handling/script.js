const express = require('express');
const app = express();

// Middleware
app.use((req, res, next)=>{
    console.log("Middleware chala");
    next();
});


app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.get('/profile', (req, res)=>{
    res.send("This is profile page");
})

app.get('/about', (req, res)=>{
    res.send("About page");
});

app.get('/contact', (req, res)=>{
    res.send("Contact Information")
});

app.get('/register', (req, res)=>{  
    return next(new Error("Something went wrong"));
});


// Error handling
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("404 page not found!");
}); 


app.listen(3000);