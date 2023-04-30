import express from 'express';
import AlumnosRoute from './routes/alumnos.routes.js'
import AlumnosRouteApi from './api/routes/students.api.routes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json())

app.use('/', express.static('public'))

app.use('/', AlumnosRoute)
app.use('/api', AlumnosRouteApi)

app.listen(2023, function(){ 
    console.log('Servidor corriendo en el host http://localhost:2023')
})