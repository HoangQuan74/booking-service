import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { XmlToJsonService } from './xml-to-json.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('xml-to-json')
@Controller('xml-to-json')
export class XmlToJsonController {
  constructor(private readonly xmlToJsonService: XmlToJsonService) {}

  @UseGuards()
  @Get(':confirmationNo')
  async getBooking(@Param('confirmationNo') confirmationNo: string) {
    const filename = `${confirmationNo}.xml`;

    const customResult = this.xmlToJsonService.convertFile(filename);
    return customResult;
  }
}
