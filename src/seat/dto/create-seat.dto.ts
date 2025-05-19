import { Types } from "mongoose";

export class CreateSeatDto {
  sector: number;
  row_number: number;
  number: number;
  value_id: Types.ObjectId;
  seat_type_id: Types.ObjectId;
  location_in_schema: number;
}
