import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueTypeDto } from './create-venue-type.dto';

export class UpdateVenueTypeDto extends PartialType(CreateVenueTypeDto) {}
