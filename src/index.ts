import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalyzisWithHtmlReport('Arsenal');
const summary2 = Summary.winsAnalyzisWithConsoleReport('Arsenal');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);
