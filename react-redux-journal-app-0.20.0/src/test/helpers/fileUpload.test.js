import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';

describe('Pruebas del archivo fileUpload.js', () => {
    
     const urlImages = 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png'
     

    test('Debe de subir la imagen y regresar su url', async() => {
       
       const reponse = await fetch(urlImages);
       const img = await reponse.blob();

       const file = new File([img],'foto.jpg');
       const url = await fileUpload( file );
       
       expect( url.includes('upload')).toBe(true);
       expect( typeof url).toBe('string');
    });

    test('Debe de retornar el null si no se envia una imagen ', async() => {
       
        const file = new File([''],'foto.jpg');
        const url = await fileUpload( file );
        
        expect(  url ).toBe( null );
     });
});
