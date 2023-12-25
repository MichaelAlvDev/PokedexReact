import { useParams } from "react-router-dom";
import Footer from "../componentes/Footer";

const Pokemon = () => {
    const { name } = useParams();

    return (
    <div>
        {name}
        <Footer />
    </div>
)
};

export default Pokemon;