import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './mensaje.entity';
import { ContactoDto } from './contacto.dto';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Mensaje)
    private mensajeRepository: Repository<Mensaje>,
  ) {}

  async recibirMensaje(datos: ContactoDto) {
    const mensaje = this.mensajeRepository.create(datos);
    await this.mensajeRepository.save(mensaje);
    console.log('Mensaje guardado:', datos);
    return { ok: true, mensaje: 'Mensaje guardado con exito!' };
  }

  async obtenerMensajes() {
    return this.mensajeRepository.find();
  }
}