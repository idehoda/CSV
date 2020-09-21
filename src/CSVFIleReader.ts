import fs from 'fs';

export abstract class CSVFileReader<T> {
    data: T[] = [];
    abstract mapRow(row: string[]): T;
    
    constructor(public filename: string) {}
    read(): void{
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((matchString: string): string[] =>  matchString.split(','))
        .map(this.mapRow);
    }
} 