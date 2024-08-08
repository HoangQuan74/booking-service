import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class XmlToJsonService {
  constructor() {}

  convertXmlToJson(xmlString: string): any {
    const parseXml = (xml: string): any => {
      xml = xml.trim();
      if (xml.startsWith('<?xml')) {
        xml = xml.substring(xml.indexOf('?>') + 2).trim();
      }

      const tagMatch = xml.match(/^<(\w+)[^>]*>/);
      if (!tagMatch) return xml;

      const tagName = tagMatch[1];
      const closingTag = `</${tagName}>`;
      const content = xml.slice(tagMatch[0].length, xml.lastIndexOf(closingTag));

      const result: any = {};
      let currentTag = '';
      let currentContent = '';
      let depth = 0;

      for (let i = 0; i < content.length; i++) {
        if (content[i] === '<' && content[i + 1] !== '/') {
          if (depth === 0 && currentTag) {
            if (result[currentTag]) {
              if (!Array.isArray(result[currentTag])) {
                result[currentTag] = [result[currentTag]];
              }
              result[currentTag].push(parseXml(currentContent));
            } else {
              result[currentTag] = parseXml(currentContent);
            }
            currentTag = '';
            currentContent = '';
          }
          depth++;
        } else if (content[i] === '<' && content[i + 1] === '/') {
          depth--;
        }

        if (depth === 0 && content[i] === '>') {
          currentTag = content.slice(content.lastIndexOf('<', i) + 1, i);
          currentContent = '';
        } else if (depth === 0) {
          currentContent += content[i];
        }
      }

      if (currentTag) {
        if (result[currentTag]) {
          if (!Array.isArray(result[currentTag])) {
            result[currentTag] = [result[currentTag]];
          }
          result[currentTag].push(parseXml(currentContent));
        } else {
          result[currentTag] = parseXml(currentContent);
        }
      }

      return { [tagName]: result };
    };

    return  (xmlString);
  }

  convertFile(filename: string): any {
    const xmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'assignment', filename), 'utf-8');
    return this.convertXmlToJson(xmlContent);
  }
}
