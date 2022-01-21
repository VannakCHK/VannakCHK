import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { RegisterEntity } from './entities/register.entity';

@Injectable()
export class RegisterService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectRepository(RegisterEntity) private courseEntitiesRepository: Repository<RegisterEntity>) { }

  async create(date: any): Promise<RegisterEntity> {
    return this.courseEntitiesRepository.save(date);
  }

  async findOne(condtion: any): Promise<RegisterEntity> {
    return this.courseEntitiesRepository.findOne(condtion);
  }
}
