export const getImagen = async () => {
    
    try {
        const apiKey = 'dozuh8mH67Tacgsd5vnj9p178WbjCn4B';
        const resp = await fetch( `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );

        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');

        // img.src = url;
        // document.body.append( img );
        // console.log( data );
        return url;
    } catch (error) {
        return 'No existe';
    }

}

// getImagen();
