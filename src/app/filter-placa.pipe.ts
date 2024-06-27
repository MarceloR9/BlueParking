import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterPlaca',
  standalone:true
})

export class FilterPlacaPipe implements PipeTransform{
  transform(veiculos: any[], placaFiltro: string): any[] {
    if (!veiculos || !placaFiltro){
      return veiculos;
    }
    return veiculos.filter(veiculo =>
      veiculo.placa.toLowerCase().includes(placaFiltro.toLowerCase())
    );
  }
}
