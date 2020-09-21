import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv')
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

console.log(manUnitedWins)