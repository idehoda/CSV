import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { CSVFileReader } from './CSVFIleReader';

type MatchData = [
    Date,
    String,
    String,
    number,
    number,
    MatchResult,
    string
];

export class MatchReader extends CSVFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6] 
        ]

    }
}