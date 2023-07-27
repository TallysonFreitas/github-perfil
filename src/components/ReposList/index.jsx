import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario})=>{
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta=>resposta.json())
            .then(respostaJson =>{
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(respostaJson)

                }, 1000);
            })
    },[nomeUsuario])

    return(
        <div className="container">
            {estaCarregando ? (
                <h1>Esta Carregando...</h1>
            ):( 
            <ul className={styles.list}>
            {repos.map(({id, name, language, html_url})  =>(
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome: </b> {name}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem: </b> {language}
                    </div>
                    <div >
                        <a className={styles.itemLink} href={html_url} target="_blank">Visitar no GitHub</a> 
                    </div>
                </li>))}
            </ul>
            )
            
            }
        </div>
    )
}

export default ReposList