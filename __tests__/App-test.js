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
 * abaixo do peso       abaixo de 11.7
 * peso normal          entre 11.7 e abaixo de 15
 * acima do peso        entre 15 e abaixo 18.6
 * Obeso                acima de 18.6
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
  
    //peso < 18.5
    //porte médio (peso:10-25kg)
    expect(imc.imc_calculator(15,1.2,1)).toEqual('Abaixo do peso')
    // peso>=11.7 e < 15
    //porte medio (peso:10-25kg)
    expect(imc.imc_calculator(18,1.1,1)).toEqual('Peso normal')
    //peso>=15 e <18.6
    //porte médio (peso:10-25kg)
    expect(imc.imc_calculator(22,1.2,1)).toEqual('Acima do peso')
    //peso>=18.6
    //porte médio (peso:10-25kg)
    expect(imc.imc_calculator(25,1.1,1)).toEqual('Obeso')

    //abaixo de 11.7
    //porte pequeno (peso:1-10kg)
    expect(imc.imc_calculator(9,1,0)).toEqual('Abaixo do peso')
    // peso>=11.7 e < 15
    //porte grande (peso:>25kg)
    expect(imc.imc_calculator(35,1.4,2)).toEqual('Peso normal')
    //peso>=15 e <18.6
    //porte pequeno(peso:1-10kg)
    expect(imc.imc_calculator(8,0.75,0)).toEqual('Acima do peso')
    //peso>=18.6
    //porte grande(peso:>25kg)
    expect(imc.imc_calculator(48,1.3,2)).toEqual('Obeso')

  })

})