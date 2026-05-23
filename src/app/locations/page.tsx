"use client";

import { useEffect, useState } from "react";
import { ResultsLocation } from "../types/RicardoYMortirio";
import LocationChulo from "../components/LocationChulo";
import Paginador from "../components/Paginador";
import api from "@/api/api";
import "./style.css"

const PageLocations =() =>{

    const [resultLocation, setResultLocation] = useState<ResultsLocation|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState("");
    const [page, setPage]=useState(1);

    const getLocations = async (page?: number)=>{
        try{
            api.get(`/location?page=${page}`).then((e)=>{
                const {data}:{data: ResultsLocation}=e;
                setResultLocation(data);
                setLoading(false);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e:any){
            setError(String(e));
        }
    }

    useEffect(()=>{
        getLocations(page);
    }),[page];

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            <h1>Locations</h1>
                <div className = "LocationContainer">
                    {resultLocation && resultLocation.results.map((e)=>(
                        <LocationChulo key = {e.id} location= {e}/>
                    ))}

                    <Paginador next={!!resultLocation?.info.next}prev={!!resultLocation?.info.prev}page={page} setPage={(e)=>{
                        setPage(e);
                    }}/>
                </div>
        </div>
    )
};

export default PageLocations;