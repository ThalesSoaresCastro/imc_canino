/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import ImcCalculator from '../src/Model/ImcCalculator'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});


/**
 * 
 * Condição                   IMC
 * abaixo do peso       abaixo de 18,5
 * peso normal          entre 18,5 e 25
 * acima do peso        entre 25 e 30
 * Obeso                acima de 30
 *
*/
describe('Teste do Model para cálculo do imc canino.', ()=>{

  /*
   *Porte do cão:
   *  0 => pequeno
   *  1 => médio
   *  2 => grande
  */
  it('Calculador de IMC', ()=>{
    const imc = ImcCalculator.imc()
    expect(imc.imc_calculator(-60, -1.80, 0)).toEqual('Os valores de peso e altura devem ser positivos e maior que zero.')
    expect(imc.imc_calculator(60, -1.80, 1)).toEqual('Os valores de peso e altura devem ser positivos e maior que zero.')
    expect(imc.imc_calculator(-60, 1.80,2)).toEqual('Os valores de peso e altura devem ser positivos e maior que zero.')
    expect(imc.imc_calculator(0, 1.80, 0)).toEqual('Os valores de peso e altura devem ser positivos e maior que zero.')
    expect(imc.imc_calculator(60, 0, 1)).toEqual('Os valores de peso e altura devem ser positivos e maior que zero.')
    expect(imc.imc_calculator(0, 0, 2)).toEqual('Os valores de peso e altura devem ser positivos e maior que zero.')
  
    //abaixo de 18.5
    //porte médio
    expect(imc.imc_calculator(13,0.9, 1)).toEqual('Abaixo do peso')
  
    //entre 18.5 e 25
    //porte grande
    expect(imc.imc_calculator(28,1.2, 2)).toEqual('Peso normal')
  
    //entre 25 e 30
    //porte pequeno
    expect(imc.imc_calculator(45,1.3, 0)).toEqual('Acima do peso')
  
    //acima de 30
    //porte médio
    expect(imc.imc_calculator(25,0.8, 1)).toEqual('Obeso')
  })

})