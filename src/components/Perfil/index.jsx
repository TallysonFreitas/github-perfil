import './perfil.css'

export default ({endereco, nome}) => {
    // const {endereco, nome} = props
    return(
        <div>
            <img className="perfil-avatar" src={endereco} alt="" />
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

// const Perfil = () => {
// export default Perfil