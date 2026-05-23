import "./style.css"
import { Episode } from "@/app/types/RicardoYMortirio";

const EpisodeChulo =({episode}: {episode:Episode})=>{
    
    return(
        <div className="ContainerChulango">
            <div className="InfoContainer">
                <h1>{episode.name}</h1>
                <h1>{episode.air_date}</h1>
                <h1>{episode.characters.length}</h1>
            </div>
        </div>
    )

}

export default EpisodeChulo;