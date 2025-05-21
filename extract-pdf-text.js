const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const files = [
  "documents/Nick Lawson's highlights (1).pdf",
  "documents/Nick_Lawson_-_Customer_Success_Manager (2).pdf"
];

async function extractTextFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  return data.text;
}

(async () => {
  for (const file of files) {
    try {
      const text = await extractTextFromPDF(file);
      const outFile = file.replace(/\.pdf$/, '.txt');
      fs.writeFileSync(outFile, text, 'utf8');
      console.log(`Extracted text from ${file} to ${outFile}`);
    } catch (err) {
      console.error(`Failed to extract ${file}:`, err);
    }
  }
})(); 