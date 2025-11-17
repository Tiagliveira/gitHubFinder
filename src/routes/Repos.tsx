import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { ReactSVG } from 'react-svg'
import ErrorReposMessagen from "../components/Error";
import { getIconByLanguage } from "../components/LanguageIcon";
import classes from '../components/Repos.module.css'
import type { ReposProps } from "../types/repos";

const Repos = () => {
    const [repositories, setRepositories] = useState<ReposProps[]>([]);
    const [errorRepos, setErrorRepos] = useState(false);
    const { login } = useParams();

    useEffect(() => {
        setErrorRepos(false);
        const fetchRepos = async () => {
            const res = await fetch(
                `https://api.github.com/users/${login}/repos?sort=stars&direction=desc`,
            );

            if (res.status === 404) {
                setErrorRepos(true);
                return;
            }

            const data = await res.json();
            setRepositories(data);

        };
        fetchRepos();
    }, [login]);

    return (
        <div className={classes.repos}>
            <Link to={'/'} className={classes.reposVoltar}>Voltar</Link>
            <h2 >Repositórios de: <span>{login}</span></h2>
            <ul className={classes.reposList}>

                {repositories
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .map((repo) => {
                        const icon = getIconByLanguage(repo.language);

                        return (
                            <li key={repo.id} className={classes.reposObjectList}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={classes.reposLink}>
                                    <div className={classes.reposName}>
                                        <strong>{repo.name}</strong>
                                        <div className={classes.reposStar}>
                                            <AiOutlineStar />
                                            {repo.stargazers_count}
                                        </div>
                                    </div>
                                    <div className={classes.reposIcons}>
                                        {icon && (
                                            <ReactSVG
                                                src={`data:image/svg+xml;utf8,${encodeURIComponent(icon.svg)}`}
                                                beforeInjection={(svg) => {
                                                    svg.setAttribute('width', '20');
                                                    svg.setAttribute('height', '20');
                                                }}
                                            />

                                        )}
                                        <span>{repo.language}</span>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                {errorRepos && <ErrorReposMessagen />}
            </ul>
        </div>
    );
};

export default Repos;