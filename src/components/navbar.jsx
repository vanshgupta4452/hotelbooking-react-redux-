import { Link } from "react-router"
const NavBar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                <a className="navbar-brand col-lg-3 me-0" href="#">Centered nav</a>
                <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                  <li className="nav-item">
                    
                    <Link className="nav-link active" aria-current="page" href="#" to='/'>Home</Link>
                    
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#" to='/booking'>Booking History</Link>
                  </li>
                </ul>
                <Link className="d-lg-flex col-lg-3 justify-content-lg-end" to={"/login"}>
                  <button className="btn btn-primary" >login</button>
                </Link>
              </div>
            </div>
          </nav>
        
        </>
    )
}

export default NavBar