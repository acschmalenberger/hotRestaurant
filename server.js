var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//arrays
const reservation = [{
    name: "alyssa",
    id:123,
    email: "gmail",
    phone: 713713
}
    
];
const waitlist = []

//basic routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// make a reservation
app.post("/api/make", function(req, res){
    var newRes = req.body

    console.log(newRes);
    if (reservation.length <=5){
        reservation.push(newRes);
        
    }else{
        waitlist.push(newRes);   
    };
    res.json(newRes);
    

});

//view a reservation
app.get("/api/view", function(req, res){
    res.json(reservation)
})

//waitlist array

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});