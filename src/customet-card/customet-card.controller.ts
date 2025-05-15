import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustometCardService } from './customet-card.service';
import { CreateCustometCardDto } from './dto/create-customet-card.dto';
import { UpdateCustometCardDto } from './dto/update-customet-card.dto';

@Controller('customet-card')
export class CustometCardController {
  constructor(private readonly custometCardService: CustometCardService) {}

  @Post()
  create(@Body() createCustometCardDto: CreateCustometCardDto) {
    return this.custometCardService.create(createCustometCardDto);
  }

  @Get()
  findAll() {
    return this.custometCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.custometCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustometCardDto: UpdateCustometCardDto) {
    return this.custometCardService.update(+id, updateCustometCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.custometCardService.remove(+id);
  }
}
