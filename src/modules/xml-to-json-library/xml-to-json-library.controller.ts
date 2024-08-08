import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { XmlToJsonLibraryService } from './xml-to-json-library.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('xml-to-json-library')
@Controller('xml-to-json-library')
export class XmlToJsonLibraryController {
  constructor(private readonly xmlToJsonLibraryService: XmlToJsonLibraryService) {}

  @UseGuards()
  @Get(':confirmationNo')
  async getBooking(@Param('confirmationNo') confirmationNo: string) {
    const filename = `${confirmationNo}.xml`;

    const result = this.xmlToJsonLibraryService.convertFile(filename);
    return result;
  }
}
