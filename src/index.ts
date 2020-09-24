import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { CSVFileReader } from './CSVFIleReader';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport(),
)

summary.buildAndPrintReport(matchReader.matches)