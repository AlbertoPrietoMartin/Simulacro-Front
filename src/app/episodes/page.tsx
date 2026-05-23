"use client";

import { ResultsEpisode } from "../types/RicardoYMortirio";
import api from "@/api/api";
import EpisodeChulo from "../components/EpisodeChulo";
import Paginador from "../components/Paginador";
import { useEffect, useState } from "react";
import "./style.css"

const PageEpisodios =() =>{
    
    const [resultEpisode, setResultEpisode] = useState<ResultsEpisode|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);

    const getEpisodes = async(page?: number)=>{
        try{
            api.get(`/episode?page=${page}`).then((e)=>{
                const {data}: {data: ResultsEpisode}=e;
                setResultEpisode(data);
                setLoading(false);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e:any){
            setError(String(e));
        }
    }


    useEffect(()=>{
        getEpisodes(page);
    },[page]);

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            <h1>Episodios</h1>

            <div className="EpisodesContainer">
                {resultEpisode && resultEpisode.results.map((e)=>(
                    <EpisodeChulo key = {e.id} episode = {e}/>
                ))}

                <Paginador next={!!resultEpisode?.info.next}prev={!!resultEpisode?.info.prev}page={page} setPage={(e)=>{
                    setPage(e);
                }}/>
            </div>


        </div>
    )
};

export default PageEpisodios;