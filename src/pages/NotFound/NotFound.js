import './NotFound.css'

function NotFound(){
    return(
        <>
            <div className="container-fluid notfound">
                <div className="row body-atas mt-3">
                    <div className="col d-flex flex-column align-items-center">
                        <h1>404 </h1>
                        <h3>Sorry, The Page Not Found</h3>
                        <img src="https://img.icons8.com/color/96/000000/box-important--v3.png"/>    
                    </div>    
                </div> 

                <div className="row body-bawah">
                    <div className="col d-flex flex-column align-items-center">
                        <h1>Page Not Found</h1>  
                        <p className='m-0'>We are sorry but the page you are looking for does not exist.</p>
                        <p>you could retourn to the Home Page or search using the search box bellow</p>  
                    </div>    
                </div>   
            </div>
        </>
    )
}

export default NotFound;