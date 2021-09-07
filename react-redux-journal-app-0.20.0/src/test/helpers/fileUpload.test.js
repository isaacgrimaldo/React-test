import '@testing-library/jest-dom';
import cloudinary from 'cloudinary';

cloudinary.config({ 
   cloud_name: 'apimedia', 
   api_key: '167186977418447', 
   api_secret: 'fduC9B2TVrqCMqbdJfOHkAhljzA',
   secure: true
 });

import { fileUpload } from '../../helpers/fileUpload';

describe('Pruebas del archivo fileUpload.js', () => {
    
     const urlImages = 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png'
     

    test('Debe de subir la imagen y regresar su url', async( done ) => {
       
       const reponse = await fetch(urlImages);
       const img = await reponse.blob();

       const file = new File([img],'foto.jpg');
       const url = await fileUpload( file );
       
       expect( url.includes('upload')).toBe(true);
       expect( typeof url).toBe('string');
       
       const segments = url.split('/');
       const publicImgId = segments[segments.length - 1].replace('.png','');
      
        //Borramos la imagen por ID
       cloudinary.v2.api.delete_resources( publicImgId , {} , () =>{
              done();
       });
    });

    test('Debe de retornar el null si no se envia una imagen ', async() => {
       
        const file = new File([''],'foto.jpg');
        const url = await fileUpload( file );
        
        expect(  url ).toBe( null );
     });
});
