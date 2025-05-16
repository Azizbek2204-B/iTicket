import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  @HttpCode(200)
  async loginAdmin(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.loginAdmin(loginDto, res);
  }

  @Post('admin/logout')
  @HttpCode(200)
  async logoutAdmin(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logoutAdmin(req, res);
  }

  @Post('admin/refresh')
  @HttpCode(200)
  async refreshTokenAdmin(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokenAdmin(req, res);
  }

  @Post('customer/login')
  @HttpCode(200)
  async loginCustomer(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.loginCustomer(loginDto, res);
  }

  @Post('customer/logout')
  @HttpCode(200)
  async logoutCustomer(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logoutCustomer(req, res);
  }

  @Post('customer/refresh')
  @HttpCode(200)
  async refreshTokenCustomer(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokenCustomer(req, res);
  }
}
