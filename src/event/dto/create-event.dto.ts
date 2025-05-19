import { Types } from "mongoose";

export class CreateEventDto {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  end_date: Date;
  end_time: Date;
  info: string;
  event_type_id: Types.ObjectId;
  human_category_id: Types.ObjectId;
  venue_id: Types.ObjectId;
  lang_id: Types.ObjectId;
  relese_date: Date;
}
