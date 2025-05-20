import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CustomerCardModule } from './customer-card/customer-card.module';
import { CustomerAddressModule } from './customer-address/customer-address.module';
import { VenueModule } from './venue/venue.module';
import { VenueTypesModule } from './venue-types/venue-types.module';
import { TypesModule } from './types/types.module';
import { VenuPhotoModule } from './venu-photo/venu-photo.module';
import { SeatTypeModule } from './seat-type/seat-type.module';
import { SeatModule } from './seat/seat.module';
import { LangModule } from './lang/lang.module';
import { EventTypeModule } from './event_type/event_type.module';
import { EventModule } from './event/event.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { TicketModule } from './ticket/ticket.module';
import { PaymentMehtodModule } from './payment_mehtod/payment_mehtod.module';
import { DeliveryMehtodModule } from './delivery_mehtod/delivery_mehtod.module';
import { BookingModule } from './booking/booking.module';
import { CardItemModule } from './card_item/card_item.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
  MongooseModule.forRoot(process.env.MONGO_URL!),
  AdminModule,
  AuthModule,
  CustomerModule,
  RegionModule,
  DistrictModule,
  CustomerCardModule,
  CustomerAddressModule,
  VenueModule,
  VenueTypesModule,
  TypesModule,
  VenuPhotoModule,
  SeatTypeModule,
  SeatModule,
  LangModule,
  EventTypeModule,
  EventModule,
  HumanCategoryModule,
  TicketStatusModule,
  TicketModule,
  PaymentMehtodModule,
  DeliveryMehtodModule,
  BookingModule,
  CardItemModule,
  CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}