var express = require('express');
var app = express();


var employee=function(req, resp){
  console.log("Employee Details");
  var empDetails = [
    {id:1001, name:"Amit",address:"pune",salary:50000, branchname:"New York"},
    {id:2, name:"Anil ",address:"katraj",salary:15000, branchname:"Los Angelis"},
    {id:3, name:"om",address:"akurdi",salary:50100, branchname:"Montana"},
    {id:4, name:"Ram",address:"chincwad",salary:20000, branchname:"India"},
    {id:5, name:"Arun",address:"nanded",salary:25000, branchname:"China"},
  ];
  resp.send(empDetails);
};


app.get ('/empDetails',employee);
var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(" app listening at http://localhost:8000", host, port)
})