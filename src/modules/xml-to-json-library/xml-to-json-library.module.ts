import { Module } from '@nestjs/common';
import { XmlToJsonLibraryService } from './xml-to-json-library.service';
import { XmlToJsonLibraryController } from './xml-to-json-library.controller';

@Module({
  controllers: [XmlToJsonLibraryController],
  providers: [XmlToJsonLibraryService],
})
export class XmlToJsonLibraryModule {}
