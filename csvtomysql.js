var csvParser = require('csv-parse');
var fs = require('fs');
var mysql = require('mysql');
var jschardet = require('jschardet');


var TABLE = "kekka";
var FILE = "list.csv";
var kekka = new Object;

var insertTable;

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db'
});

con.connect(function(err) {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");
});

var datas;

fs.readFile(FILE, {
    encoding: 'utf-8'
}, function(err, csvData) {
    if (err) {
        console.log(err);
    }
    csvParser(csvData, {
        delimiter: ','
    }, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            datas = data;
            for (var i = 1; i < datas.length; i++) {
                for (var j = 0; j < datas[0].length; j++) {
                    kekka[datas[0][j]] = datas[i][j];
                };
                insertTable = "INSERT INTO " + TABLE + " SET ?";
                if (i == 1) {
                    console.log(data[0]);
                }
                if (i == datas.length-1) {
                    console.log(i);
                }
                con.query(insertTable, kekka, function(err, res) {
                    if (err) throw err;
                });
            };
            con.end();
        };
    });
});