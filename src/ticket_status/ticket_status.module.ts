import { Module } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { TicketStatusController } from './ticket_status.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketStatusSchema } from './models/ticket_status.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'TicketStatus', schema: TicketStatusSchema }])],
  controllers: [TicketStatusController],
  providers: [TicketStatusService],
})
export class TicketStatusModule {}
