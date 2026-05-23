import { Location } from "@/app/types/RicardoYMortirio";
import "./style.css";

const LocationChulo = ({location}: {location:Location})=>{

    return(
        <div className="ContainerChulango">
            <div className="InfoContainer">
                <h1>{location.name}</h1>
                <h1>{location.type}</h1>
                <h1>{location.dimension}</h1>
                <h1>{location.residents.length}</h1>
            </div>
        </div>
    )
}

export default LocationChulo;