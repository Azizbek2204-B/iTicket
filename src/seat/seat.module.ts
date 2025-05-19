import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SeatSchema } from './schemas/seat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Seat', schema: SeatSchema }])],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
