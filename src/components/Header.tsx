import {Link} from "react-router-dom";

export function Header() {
    return (
        <div style={{
            position: "sticky",
            top: "0",
            width: "100vw",
            padding: "0 10rem",
            height: "5rem",
            boxSizing: "border-box",
            background: "linear-gradient(to right, rgba(244,157,55, .8),rgba(44, 99, 144, .8),rgba(244,157,55, .8))",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "x-large",
        }}>

            <Link to={"/"} style={{height: "80%", marginLeft:"-4rem"}}>
                <img height={"100%"} src={"/_4dffdef0-4ed2-49b4-80c8-7a7f05266bfc.jpeg"} alt={"logo"}
                     style={{borderRadius: "100%"}}/>
            </Link>
            <div style={{
                display: "flex",
                gap: "4rem",
            }}>
                <Link to={"/"} style={{color: "white", fontWeight: "500",}}>
                    Home
                </Link>
                <Link to={"/characters"} style={{color: "white", fontWeight: "500"}}>
                    Characters
                </Link>
            </div>
        </div>
    )
}