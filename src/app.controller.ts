import {
  Controller,
  Render,
  Param,
  Body,
  Get,
  Post,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';
import MsgData from './Msgdata';

const msgs = [];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  indexedDB(@Session() session: Record<string, any>) {
    const username = session.username ? session.username : '未入力';

    return {
      title: 'NestJS-MVC',
      message: 'Username' + username,
      data: msgs,
    };
  }

  @Post()
  @Render('index')
  form(@Body() msg: MsgData, @Session() session: Record<string, any>) {
    msg.posted = new Date();
    session.username = msg.name;
    msgs.unshift(msg);
    return {
      title: 'NestJS-MVC',
      message: 'posted:' + JSON.stringify(msg),
      username: session.username,
      data: msgs,
    };
  }
}
