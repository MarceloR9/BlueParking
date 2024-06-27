import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstacionamentoService } from '../estacionamento.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent {
  placa: string = '';
  tipo: 'carro' | 'moto' = 'carro';
  mensagem: string | null = null;

  constructor(private estacionamentoService: EstacionamentoService){}

  registrarEntrada(){
    this.estacionamentoService.entrar(this.placa, this.tipo);
    this.mensagem = 'Veículo registrado com sucesso!';
  }

  fecharMensagem() {
    this.mensagem = null;
  }
}
