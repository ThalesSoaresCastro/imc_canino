//IMC - Calculador de imc para cães

/**
 * 
 * Condição                   IMC
 * abaixo do peso       abaixo de 18,5
 * peso normal          entre 18,5 e 25
 * acima do peso        entre 25 e 30
 * Obeso                acima de 30
 *
*/
const imc = ()=>{

    const imc_calculator = (peso: number, altura: number, porte: number) =>{
        /*
         *Porte do cão:
         *  0 => pequeno
         *  1 => médio
         *  2 => grande
        */

        if( peso <= 0 || altura <=0){
            return 'Os valores de peso e altura devem ser positivos e maior que zero.'
        }else{
            let arr = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obeso']
            let arr_port = [{porte:0, value:0.1}, {porte:1,value:1},{porte:2,value:0.2}]

            // let value =  arr_port.forEach(e=>{
            //     return if(porte == e.porte)  peso/(altura*altura)*e.value
            // })
            let value = peso/(altura*altura)
            if(value < 18.5) 
                return arr[0]
            else if(value>=18.5 && value < 25)
                return arr[1]
            else if(value>=25 && value < 30)
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