import { Controller, Get, Post, Body, Patch, Param, Delete, BadGatewayException } from '@nestjs/common';
import { RegisterService } from './register.service';
import * as bcrypt from 'bcrypt';
// import path from 'path/posix';

@Controller('api')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get('id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(+id);
  }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    return this.registerService.create({
      name,
      email,
      password: hashedPassword
    })
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.registerService.findOne({ email });

    if (!user) {
      throw new BadGatewayException('invalid credentials');
    }

    if (!await bcrypt.compare(password, user.password)) {
      throw new BadGatewayException('invalid credentials');
    }
    return user;
  }
}
