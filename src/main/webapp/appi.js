const cargarPeliculas = async()=>{
    try{

        const respuesta = await fetch('https://api.themoviedb.org/3/movie/12?api_key=5041fb186006a172a0f3a65cfc2898b3');

        console.log(respuesta);

        const datos = await respuesta.json();

        console.log(datos.title);


    }catch(error){
        console.log(error)
    }
       
    
}

cargarPeliculas();