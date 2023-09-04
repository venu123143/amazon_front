import { NavLink } from "react-router-dom"

const Errorpage = () => {
    return (
        <>
            <div id="notfound" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="notfound" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="notfound-404" style={{ position: 'absolute', zIndex: '-1', color: '#f5f5f6', fontSize: '15rem', fontWeight: '530', fontFamily: 'poppins' }} >
                        <h1 style={{ textAlign: 'center'}} >404</h1>
                    </div>
                    <h2 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold', fontFamily: 'poppins' }}>we are sorry, page not found!</h2>
                    <NavLink className="waves-effect waves-light btn-large" style={{ padding: '12px 15px', margin: '20px 20px', color: 'white', textDecoration: 'none', fontStyle: 'italic', fontFamily: 'poppins', background: 'linear-gradient(93.87deg,#095ae6,#062794)', borderRadius: "8px" }} to="/">Back to Homepage</NavLink>
                    <p style={{ fontStyle: 'italic', fontFamily: 'poppins', textAlign: 'center' }}>the page you are looking for might have been removed or had it's name changed or is temporarily unavalilable.</p>
                </div>
            </div>
        </>
    )
}
export default Errorpage