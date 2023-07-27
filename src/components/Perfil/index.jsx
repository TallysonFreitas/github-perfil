import styles from './Perfil.module.css'

export default ({nomeUsuario}) => {
    // const {endereco, nome} = props
    return(
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

// const Perfil = () => {
// export default Perfil