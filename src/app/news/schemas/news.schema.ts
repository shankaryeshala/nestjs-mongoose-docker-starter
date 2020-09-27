import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString } from "class-validator";

@Schema()
export class News extends Document{
    @IsString()
    @Prop({ required: true })
    name?: string;

    @Prop()
    description?: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);