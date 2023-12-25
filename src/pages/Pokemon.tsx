import { useNavigate, useParams } from "react-router-dom";
import Footer from "../componentes/Footer";
import PokeballImg from "../assets/pokeball.png"
import PokeMain from "../assets/loading.gif"
import styles from "./pokemon.module.css"
const Pokemon = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <button
            className={styles.button}
                onClick={() => navigate(-1)}>
                <img 
                className={styles.buttonImg}
                src={PokeballImg} 
                alt="Go-back" 
                />Go Back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                    <div>Nro 001{/*{Pokemon.id}*/}</div>
                    <div>
                        <img className={styles.pokemonInfoImg} src={PokeMain} alt={Pokemon.name} />
                    </div>
                    <div>Hp: 80</div>
                    <div>Attack: 20</div>
                    <div>Defense:40</div>
                </main>
            </div>
            <Footer />
        </>
    )
};

export default Pokemon;