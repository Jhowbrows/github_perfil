import { useEffect, useState } from "react";


import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);


    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then((res) => {
            if (!res.ok) {
              throw new Error("Usuário não encontrado");
            }
            return res.json();
        })
        .then((resJson) => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);

            }, 2000)
        })
        .catch((e) => {
            setEstaCarregando(false);
            setErro(true);
            console.error("Erro no carregamento do repositório:",e.message);
        });
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ): erro ? (
                <p className={styles.erroMsg}>Falha ao carregar repositório. Verifique o nome de usúario digitado.</p>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({id, name, language, html_url}) => ( 
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar Repositório</a>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default ReposList;