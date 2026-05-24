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
    const [search, setSearch] = useState("");

    const getCharacters = async(page?: number, name?: string)=>{
        
        setError("");

        try{
            await api.get(`/character?page=${page}&name=${name ?? ""}`).then((e)=>{
                const {data}: {data:ResultsCharacter}=e;
                setResultCharacter(data);
                setLoading(false);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e:any){
            setResultCharacter(null);
            setError(String(e));
        }
    }

    useEffect(()=>{
        getCharacters(page, search);
    },[page, search]);

    useEffect(()=>{
        setPage(1);
    },[search]);

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            <div className = "SearchContainer">
                <input 
                    value = {search}
                    onChange = {(e=>setSearch(e.target.value))}
                    placeholder="Buscar personajes..."
                />
            </div>       

            {!resultCharacter && search && <p>No se encontraron personajes</p>}

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