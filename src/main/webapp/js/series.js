
const cargarSeries = async()=>{
    try{

        const respuesta = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=5041fb186006a172a0f3a65cfc2898b3&languaje=es');  
                
        // console.log(respuesta);

        if (respuesta.status===200){
            const datos = await respuesta.json();

                    
            let series='';
            datos.results.forEach(serie => {
                series+= 
                `
                    <div class="box1" id="box1">
                        <div class="content">
                            <img src= "https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="">
                            <h2 style="text-align:center ;">${serie.name}</h2>
                            <p style="text-align:justify ;">
                                ${serie.overview}
                            </p>
                        </div >
                    </div>
                `
                
                //  console.log(serie.name)
                //  console.log(sectionSeries)
                //  sectionSeries.insert
                // console.log(serie.original_name)
                // console.log
            });
            document.getElementById('container1').innerHTML=series    
            console.log(series)
            

        }else if(respuesta.status===401){
            console.log('Error en la llave')
        }else if(respuesta.status===404){
            console.log('La película buscada no existe')
        }
        else{
            console.log('Error de conexión al servidor')
        }

           
    }catch(error)
    {
      console.log(error)
    }
       
    
}

cargarSeries();