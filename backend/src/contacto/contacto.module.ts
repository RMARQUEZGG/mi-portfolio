import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoController } from './contacto.controller';
import { ContactoService } from './contacto.service';
import { Mensaje } from './mensaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mensaje])],
  controllers: [ContactoController],
  providers: [ContactoService],
})
export class ContactoModule {}