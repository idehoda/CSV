"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var CSVFIleReader_1 = require("./CSVFIleReader");
var reader = new CSVFIleReader_1.CSVFileReader('football.csv');
reader.read();
console.log(reader.data[0]);
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
// console.log(manUnitedWins)
