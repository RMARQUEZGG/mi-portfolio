import { Controller, Post, Get, Body } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoDto } from './contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  recibirMensaje(@Body() datos: ContactoDto) {
    return this.contactoService.recibirMensaje(datos);
  }

  @Get()
  obtenerMensajes() {
    return this.contactoService.obtenerMensajes();
  }
}