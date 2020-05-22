//IMC - Calculador de imc para cães

/**
 *  QUADRO 5
 * Condição                   IMC
 * abaixo do peso       abaixo de 11.7
 * peso normal          entre 11.7 e abaixo de 15
 * acima do peso        entre 15 e abaixo 18.6
 * Obeso                acima de 18.6
 *
*/
const imc = ()=>{

    const imc_calculator = (peso: number, altura: number, porte: number) =>{
        /*
         *Porte do cão:
         *  0 => pequeno (peso: 1-10kg)
         *  1 => médio   (peso: 10-25kg)
         *  2 => grande  (peso: >25kg)
        */
        if( peso <= 0 || altura <=0){
            return 'Os valores de peso e altura devem ser positivos e maior que zero.'
        }else{
            let arr = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obeso']
            let arr_port = [{porte:0, value:0.1}, {porte:1,value:0},{porte:2,value:0.2}]

            //O valor do cálculo do imc depende do porte do cachorro além da altura e peso.

            /**
             * Pequeno porte : aumenta 10% do imc.
             * Grande porte :  diminui 20% do imc.
            */
            
            let value = (peso: number,altura: number,porte: number)=>{
                let aux = peso/(altura*altura)

                if(porte == 0)
                    return aux+(aux*0.1)
                else if(porte == 2)
                    return aux-(aux*0.2)
                else
                    return aux
            }

            if(value(peso, altura, porte) < 11.7) 
                return arr[0]
            else if(value(peso, altura, porte) >=11.7 && value(peso, altura, porte) < 15)
                return arr[1]
            else if(value(peso, altura, porte) >=15 && value(peso, altura, porte) < 18.6)
                return arr[2]
            else
                return arr[3] 
        }
    }


    return{
        imc_calculator,
    }

}

export default{
    imc,
}