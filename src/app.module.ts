import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { XmlToJsonModule } from './modules/xml-to-json/xml-to-json.module';
import { XmlToJsonLibraryModule } from './modules/xml-to-json-library/xml-to-json-library.module';

@Module({
  imports: [AuthModule, UserModule, XmlToJsonModule, XmlToJsonLibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
