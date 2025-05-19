import { Types } from "mongoose";

export class CreateTicketDto {
  event_id: Types.ObjectId;
  seat_id: Types.ObjectId;
  price: number;
  service_fee: number;
  status_id: Types.ObjectId;
  ticket_type: number;
}
