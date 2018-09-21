const mysql=require("mysql");
var pool=mysql.createPool({
    host:"192.168.64.2",
    password:"",
    user:"root",
    database:"Tea",
    port:3306,
    connectionLimit:5
});
module.exports=pool;