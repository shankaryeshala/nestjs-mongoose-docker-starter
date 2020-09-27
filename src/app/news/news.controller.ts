import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

    constructor(private readonly newsService: NewsService) {

    }

    @Get()
    public getNews() {
        console.log('Before calling service inside controller');
        return this.newsService.findAll();
    }
}
