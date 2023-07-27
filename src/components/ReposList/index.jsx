import { useEffect, useState } from "react"

const ReposList = ()=>{
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(()=>{
        fetch('https://api.github.com/users/TallysonFreitas/repos')
            .then(resposta=>resposta.json())
            .then(respostaJson =>{
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(respostaJson)

                }, 3000);
            })
    },[])

    return(
        <>
            {estaCarregando && (
                <h1>Esta Carregando...</h1>
            )}
            <ul>
            {repos.map(({id, name, language, html_url})  =>(
                <li key={id}> <br />
                    <b>Nome: {name}</b> <br />
                    <b>Linguagem: {language}</b> <br />
                    <a href={html_url} target="_blank">visitar no github</a> <br />
                </li>
            ))}
        </ul>
        </>
    )
}

export default ReposList