import { useState, useEffect } from "react"

export default ()=>{
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(()=>{
        console.log('o compomente iniciou')

        return ()=>{
            console.log('o componente finalizou')
        }
    },[])

    useEffect(()=>{
        console.log('o estado -nome- mudou')
    }, [nome])

    useEffect(()=>{
        console.log('materiaA foi alterada para ' + materiaA)
    },[materiaA, materiaB, materiaC])

    const alteraNome = (evento)=>{
        // setNome(evento.target.value)
        setNome(estadoAnterior => {

            return evento.target.value
        })
    }

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if(media >= 7){
            return(
                <p>olá, {nome} foi aprovado</p>
            )
        }else{
            return(
                
                <p>olá, {nome} foi reprovado</p>
            )
        }
    }

    return(
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item =>(
                    <li key={item + '-item'}>{item}</li>)
                )}
            </ul>
            
            <input type="text" name="" id="" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" name="" id="" placeholder="Nota matéria A" onChange={({target}) =>{setMateriaA(parseInt(target.value))}}/>
            <input type="number" name="" id="" placeholder="Nota matéria B" onChange={evento =>{setMateriaB(parseInt(evento.target.value))}}/>
            <input type="number" name="" id="" placeholder="Nota matéria C" onChange={evento =>{setMateriaC(parseInt(evento.target.value))}}/>
            <p>O aluno foi aprovado</p>
            {materiaA}
            <br />
            {materiaB}
            <br />
            {materiaC}
            <br />
            {renderizaResultado()}
        </form>
    )
}