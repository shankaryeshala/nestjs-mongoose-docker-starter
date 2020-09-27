import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './app/news/news.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      NewsModule, 
      MongooseModule.forRoot("mongodb://192.168.99.100:27017/news-db", {
        connectionName: "news-mongodb"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 

}
