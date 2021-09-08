/**
 * Serviço responsável por executar as operações da calculadora
 *
 * @author Erik Proença <erik.proenca2011@gmail.com>
 * @since v1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   *Método que calcula a operação matemática dado 2 números
   *Suporta as operações soma, subtração, multiplicação e divisão
   * @param mum1 number
   * @param num2 number
   * @param operacao string
   * @return number
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 /  num2;
      break;
      default:
        resultado = 0
    }
    return resultado;
  }
}
