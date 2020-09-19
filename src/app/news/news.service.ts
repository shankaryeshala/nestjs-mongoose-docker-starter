import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {

    constructor() {

    }
    /**
     * name
     */
    public getNews() {
        return ['news-1','news-2'];
    }
}
