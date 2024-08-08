import { Module } from '@nestjs/common';
import { XmlToJsonService } from './xml-to-json.service';
import { XmlToJsonController } from './xml-to-json.controller';

@Module({
  controllers: [XmlToJsonController],
  providers: [XmlToJsonService],
  exports: [XmlToJsonService],
})
export class XmlToJsonModule {}
