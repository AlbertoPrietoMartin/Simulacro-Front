import "./style.css";
import { Character } from "@/app/types/RicardoYMortirio";

const CharacterChulo = ({character}: {character: Character}) =>{
    return(
        <div className ="ContainerCharacterChulangano">
            <img src = {character.image}/>
            <div className = "InfoContainer">
                <h1>{character.name}</h1>
                <p>{character.gender}</p>
                <p>{character.status}</p>
                <p>{character.origin.name}</p>
            </div>
        </div>

    )
};

export default CharacterChulo;