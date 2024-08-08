import { Test, TestingModule } from '@nestjs/testing';
import { XmlToJsonController } from './xml-to-json.controller';
import { XmlToJsonService } from './xml-to-json.service';

describe('XmlToJsonController', () => {
  let controller: XmlToJsonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XmlToJsonController],
      providers: [XmlToJsonService],
    }).compile();

    controller = module.get<XmlToJsonController>(XmlToJsonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
