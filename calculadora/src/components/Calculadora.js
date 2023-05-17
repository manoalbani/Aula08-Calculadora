
import { useState } from 'react';
import './Calculadora.css';



function Calculadora() {
  let [calculo, setCalculo] = useState('0');
  let [resultado, setResultado] = useState('0');
  function botao(numero) {
    console.log(calculo=='0');
    if(calculo=='0'){
      calculo = '';
    }
    console.log(calculo);
    setCalculo(calculo+numero)
  };
  function igual(){
    if(resultado=='0'){
      resultado = '';
    }
    setResultado(eval(calculo))
    
  };
  function limpar(){
    setResultado('0');
    setCalculo('0');
  }
  return (
    <div className="Calculadora">
      <div>
        <h2>{calculo}</h2> 
        <h1>{resultado}</h1>       
      </div>
    <div>
      
    <div>
    <button className="limpar" onClick={limpar}>C</button>
    </div>
    <button onClick={()=> botao('7')}>7</button>
    <button onClick={()=> botao('8')}>8</button>
    <button onClick={()=> botao('9')}>9</button>
    <button onClick={()=> botao('/')}>/</button>
    </div>
    <div>
    <button onClick={()=> botao('4')}>4</button>
    <button onClick={()=> botao('5')}>5</button>
    <button onClick={()=> botao('6')}>6</button>
    <button onClick={()=> botao('*')}>x</button>
    </div>
    <div>
    <button onClick={()=> botao('1')}>1</button>
    <button onClick={()=> botao('2')}>2</button>
    <button onClick={()=> botao('3')}>3</button>
    <button onClick={()=> botao('-')}>-</button>
    </div>
    <div>
    <button onClick={()=> botao('.')}>,</button>
    <button  onClick={()=> botao('0')}>0</button>
    <button  onClick={igual} >=</button>
    <button onClick={()=> botao('+')}>+</button>
    </div>
    </div>
  );
}

export default Calculadora;
