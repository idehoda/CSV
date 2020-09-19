import { MatchResult } from './MatchResult';
import { CSVFileReader } from './CSVFIleReader';

const reader = new CSVFileReader('football.csv')
reader.read();
console.log(reader.data[0])
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
        manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin){
        manUnitedWins++
    }
}

// console.log(manUnitedWins)