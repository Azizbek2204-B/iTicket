import { PartialType } from '@nestjs/mapped-types';
import { CreateCustometCardDto } from './create-customet-card.dto';

export class UpdateCustometCardDto extends PartialType(CreateCustometCardDto) {}
