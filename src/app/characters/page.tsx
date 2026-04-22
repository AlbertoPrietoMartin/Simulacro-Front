"use client";

import { useEffect, useState } from "react";
import { ResultsCharacter } from "../types/RicardoYMortirio";
import api from "@/api/api";
import CharacterChulo from "../components/CharacterChulo";
import Paginador from "../components/Paginador";
import "./style.css";

const PageCharacter =() =>{
    
    const [resultCharacter, setResultCharacter] = useState<ResultsCharacter|null>(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState("");
    const [page,setPage] = useState(1);

    const getCharacters = async(page?: number)=>{
        try{
            api.get(`/character?page=${page}`).then((e)=>{
                const {data}: {data:ResultsCharacter}=e;
                setResultCharacter(data);
                setLoading(false);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e:any){
            setError(String(e));
        }
    }
    
    useEffect(()=>{
        if(error){
            alert(error);
        }
    },[error]);

    useEffect(()=>{
        getCharacters(page);
    },[page]);

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            

            <div className = "CharactersContainer">
                {resultCharacter && resultCharacter.results.map((e)=>(
                    <CharacterChulo key={e.id} character={e}/>
                ))}

                <Paginador next={!!resultCharacter?.info.next}prev={!!resultCharacter?.info.prev}page={page} setPage={(e)=>{
                    setPage(e);
                }}/>
            </div>
        </div>



    )
};

export default PageCharacter;