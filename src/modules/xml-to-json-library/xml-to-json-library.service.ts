import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';

@Injectable()
export class XmlToJsonLibraryService {
  constructor() {}

  async convertXmlToJson(xmlString: string): Promise<any> {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xmlString, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async convertFile(filename: string): Promise<any> {
    const xmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'assignment', filename), 'utf-8');
    return this.convertXmlToJson(xmlContent);
  }
}
