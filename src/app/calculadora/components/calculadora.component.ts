import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2:string;
  private resultado: number;
  private operacao:  string;

  constructor(private service: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }


  /**
   * Inicializa todos os operadores para os valores padrão
   *
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  };

  /**
   *Método que adiciona um número
   * @param numero: string
   * @return  void
   */
  adicionarNumero(numero: string): void {
    if(this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  };


  /**
   *Retorna o valor concatenado. Trata o separador decimal

   * @param numAtual string
   * @param numConcat string
   * @return string
   */

  concatenarNumero(numAtual: string, numConcat: string): string {
    if(numAtual === '0' || numAtual === null) {
      numAtual = ' ';
    }

    if(numConcat === '.' && numAtual === '0') {
      return '0.';
    }

    if(numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   *Executa lógica quando um operador for selecionado.
   Caso já possua uma operação selecionada, executa a operação anterior, e define a nova operação.
   *
   * @param operacao string
   * @return void
   */

  definirOperacao(operacao: string): void {
    if(this.operacao === null) {
      this.operacao = operacao;
      return;
    };

    /*Caso a operação seja definida e o número 2 selecionado, efetue o cálculo da operação */

    if(this.numero2 !== null) {
      this.resultado = this.service.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if(this.numero2 === null) {
      return;
    }

    this.resultado = this.service.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  get  display(): string {
    if(this.resultado !== null) {
      return this.resultado.toString();
    }

    if(this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }

}
