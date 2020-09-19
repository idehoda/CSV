import { MatchResult } from './MatchResult';
import fs from 'fs';
import { dateStringToDate } from './utils';

type MatchData = [
    Date,
    String,
    String,
    number,
    number,
    MatchResult,
    string
];

export class CSVFileReader {
    data: MatchData[] = [];
    constructor(public filename: string) {}
    read(): void{
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((matchString: string): string[] =>  matchString.split(','))
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6] 
            ]
        })
    }
} 