import React from 'react'

function Nav({Toggle}) {
  return (
    <nav
    className="navbar navbar-expand-sm navbar-white bg-transparent" >
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        ><i className='bi bi justify'></i></button>
        <div className='container'>
            
        <div className="cat collapse navbar-collapse" id="collapsibleNavId">
            <br></br>
            <form className=" search d-flex my-2 my-lg-0">
                <input
                    className="  form-control me-sm-2"
                    type="text"
                    placeholder="Search"
                />
            </form>
        </div>
        </div>
    </nav>
    
  )
}

export default Nav