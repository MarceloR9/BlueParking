import { Injectable } from '@angular/core';

interface Veiculo {
  placa: string;
  tipo: 'carro' | 'moto';
  horaEntrada: Date;
}

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {
  private veiculos: Veiculo[] = [];
  private precoCarro: number = 10;
  private precoMoto: number = 5;

  entrar(placa: string, tipo: 'carro' | 'moto'): void{
    this.veiculos.push({placa, tipo, horaEntrada: new Date()});
  }

  sair(placa: string): {placa: string, tempo: number, preco: number} | null{
    const veiculo = this.veiculos.find(v => v.placa === placa);
    if (veiculo) {
      const agora = new Date();
      const tempo = (agora.getTime() - veiculo.horaEntrada.getTime()) / (1000*60*60);
      const preco = tempo * (veiculo.tipo === 'carro' ? this.precoCarro : this.precoMoto);
      this.veiculos = this.veiculos.filter(v => v.placa !== placa);
      return {placa, tempo, preco}
    }
    return null;
  }

  listarVeiculos(): Veiculo[]{
    return this.veiculos;
  }
}
