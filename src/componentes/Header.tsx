type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

import styles from "./Header.module.css"
const Header = ({ query, setQuery }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <input
                className={styles.input}
                placeholder="Search for a pokemon"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </header>
    );
};

export default Header;