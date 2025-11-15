import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
 

  base: '/Website-SCN/',
 

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        asociados: resolve(__dirname, 'asociados.html'),
        actividades: resolve(__dirname, 'actividades.html'),
        recursos: resolve(__dirname, 'recursos.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    }
  
  }
})
