import styles from './Perfil.module.css';


const Perfil = ({nomeUsurario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsurario}.png`} />
            <h1 className={styles.name}>
                {nomeUsurario}
            </h1>
        </header>
        )
}

export default Perfil;