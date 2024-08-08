import { Test, TestingModule } from '@nestjs/testing';
import { XmlToJsonLibraryService } from './xml-to-json-library.service';

describe('XmlToJsonLibraryService', () => {
  let service: XmlToJsonLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XmlToJsonLibraryService],
    }).compile();

    service = module.get<XmlToJsonLibraryService>(XmlToJsonLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
