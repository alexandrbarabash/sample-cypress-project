const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

export const readPdf = (pathToPdf: string) => {
  return new Promise(resolve => {
    const pdfPath = path.resolve(pathToPdf);
    let dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(function ({text}) {
      const arr = text.replaceAll(/\n/gi, '');
      resolve(arr);
    });
  });
};
