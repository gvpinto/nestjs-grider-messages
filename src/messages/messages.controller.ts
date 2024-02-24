import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(): void {}

  @Post()
  createMessage(@Body() body: any): void {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): void {
    console.log(id);
  }
}
