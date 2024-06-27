import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstacionamentoService } from '../estacionamento.service';
import { RouterModule } from '@angular/router';
import { FilterPlacaPipe } from '../filter-placa.pipe';

@Component({
  selector: 'app-saida',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FilterPlacaPipe],
  templateUrl: './saida.component.html',
  styleUrl: './saida.component.css'
})
export class SaidaComponent {
  placa: string = '';
  veiculos: {placa: string, tipo: 'carro' | 'moto', horaEntrada: Date}[] = [];
  veiculosFiltrados: {placa: string, tipo: 'carro' | 'moto', horaEntrada: Date} [] = [];
  veiculoSaida: {placa: string, tempo: number, preco: number} | null = null;
  placaFiltro: string = '';
  placaSelecionada: string | null = null;
  veiculoSelecionado: { placa: string; tipo: 'carro' | 'moto'; horaEntrada: Date } | null = null;

  constructor(private estacionamentoService: EstacionamentoService){
    this.veiculos = this.estacionamentoService.listarVeiculos();
  }

  atualizarListaVeiculos() {
    this.veiculosFiltrados = [...this.veiculos];
  }

  buscarVeiculo(){
    const veiculoEncontrado = this.veiculos.find(v => v.placa.toLowerCase() === this.placaFiltro.toLowerCase());
    if (veiculoEncontrado) {
      this.veiculoSelecionado = veiculoEncontrado;
    } else {
      this.veiculoSelecionado = null;
    }
  }

  registrarSaida(placa: string){
    this.veiculoSaida = this.estacionamentoService.sair(placa);
    if (this.veiculoSaida) {
        this.veiculos = this.veiculos.filter(v => v.placa !== placa);
        this.veiculoSelecionado = null;
    }
  }

  fecharDetalhesSaida() {
    this.veiculoSaida = null;
    this.veiculoSelecionado = null;
  }
}
