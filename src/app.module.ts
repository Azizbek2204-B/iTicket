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

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
  MongooseModule.forRoot(process.env.MONGO_URL!),
  AdminModule,
  AuthModule,
  CustomerModule,
  RegionModule,
  DistrictModule,
  CustomerCardModule,
  CustomerAddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}