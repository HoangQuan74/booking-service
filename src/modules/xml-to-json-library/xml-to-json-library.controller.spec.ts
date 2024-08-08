import { Test, TestingModule } from '@nestjs/testing';
import { XmlToJsonLibraryController } from './xml-to-json-library.controller';
import { XmlToJsonLibraryService } from './xml-to-json-library.service';

describe('XmlToJsonLibraryController', () => {
  let controller: XmlToJsonLibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XmlToJsonLibraryController],
      providers: [XmlToJsonLibraryService],
    }).compile();

    controller = module.get<XmlToJsonLibraryController>(XmlToJsonLibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
