import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './schemas/news.schema';


@Injectable()
export class NewsService {

    constructor(@InjectModel(News.name) private newsModel: Model<News>) {
        
     }

    public async create(createNewsDto: { name: string, description: string }): Promise<News> {
        const createdNews = new this.newsModel(createNewsDto);
        return await createdNews.save();
    }

    public async findAll(): Promise<News[] | null> {
        console.log('Before calling news model find ====>>>>');
        return this.newsModel.find().exec();
    }
}
