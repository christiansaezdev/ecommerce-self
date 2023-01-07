export default function Layout ({children}){
    return (
        <div>
            <marquee style={{background:'#999', color:'#ffffff'}}>
            Esto es un marquee
            </marquee>
            {children}
        </div>
    )
}