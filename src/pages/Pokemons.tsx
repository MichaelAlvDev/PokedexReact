import { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
import styles from "./pokemons.module.css"
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";

const Pokemons = () => {
    const [query, setQuery] = useState("")
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        const fetchAllPokemons = async () => {
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
        }
        fetchAllPokemons();
    }, [])

    const filterPokemons = pokemons?.slice(0,900).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    });
    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav className={styles.nav}>
                    {filterPokemons?.slice(0, 900).map((pokemon) => (
                        <Link
                            key={pokemon.id}
                            className={styles.listItem}
                            to={`/pokemons/${pokemon.name.toLowerCase()}`}>
                            <img
                                className={styles.listItemIcon}
                                src={pokemon.id<650? pokemon.imgSrc:pokemon.imgSrcLarge}
                                alt={pokemon.name}
                            />
                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                            </div>
                        </Link>
                    ))}

                </nav>
            </main>
            <Footer />
        </>
    );
};

export default Pokemons;