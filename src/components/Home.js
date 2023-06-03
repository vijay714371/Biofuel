import React from 'react'

function Home() {
  return (
   
      <>
    
    <section id='content' >
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img class="d-block w-100 " style={{"height":"550px"}} src="https://imechewebresources.blob.core.windows.net/imeche-web-content/journals/coffee-car-home.jpg?sfvrsn=50f5cd12_0" alt="First slide" />
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100 " style={{"height":"550px"}} src="https://imechewebresources.blob.core.windows.net/imeche-web-content/journals/coffee-car-home.jpg?sfvrsn=50f5cd12_0" alt="Second slide" />
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100 " style={{"height":"550px"}} src="https://imechewebresources.blob.core.windows.net/imeche-web-content/journals/coffee-car-home.jpg?sfvrsn=50f5cd12_0" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </section>

<section id='services'>

</section>

    </>
  )
}

export default Home
