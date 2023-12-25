import pokedex from "../assets/loading.gif"
import styles from "./loadingScreen.module.css"
const LoadingScreen = () => {
    return (
        <div className={styles.loadingSc}>
            <img src={pokedex} alt="Loading screen Pika Pika" />
            <span className={styles.loadingText}>Loanding. . . . </span>
        </div>
    );
};

export default LoadingScreen;