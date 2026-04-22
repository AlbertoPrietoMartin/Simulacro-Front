import Link from "next/link";
import "./style.css";

const Navigator = () =>{

    type NavigationLink = {
        name: string,
        link: string
    }

    const links:NavigationLink[]=[
        {
            link:"/",
            name:"La Casa"
        },
        {
            link:"/characters",
            name:"Personajitos"
        },

        {
            link:"/locations",
            name:"Lugarcitos"
        },

        {
            link: "/episodes",
            name:"Episodios"
        }
    ]

    return (
        <div className = "NavigatorContainer">
            {links.map((e)=>(
                <Link className = "NavigatorLink" key={e.link} href={e.link}>
                    <p>{e.name}</p>
                </Link>
            ))}
        </div>
    );
};

export default Navigator;