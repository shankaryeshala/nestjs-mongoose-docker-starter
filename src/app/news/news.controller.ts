import { Controller, Get, Post, Body } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsDto } from './dtos/news.dto';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {

    constructor(private readonly newsService: NewsService) {

    }

    @Get()
    async getNews(): Promise<News[]> {
        console.log('Before calling service inside controller');
        return this.newsService.findAll();
    }

    @Post()
    async addNews(@Body() news: NewsDto): Promise<News> {
        console.log('Before calling service inside controller');
        await this.newsService.create(news);
        return news;
    }
}
