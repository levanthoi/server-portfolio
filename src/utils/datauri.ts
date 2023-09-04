import DatauriParser from 'datauri/parser';
const parser = new DatauriParser();

// Data uri helper function
const dataUri = (file: any) => parser.format('jpeg', file.buffer);

export default dataUri;
