import { Router } from 'express'
import * as controller from '../controllers/students.api.controllers.js'

const route = Router()

route.get('/students', controller.getStudents)
route.post('/students', controller.createStudent)

route.get('/students/:legajoStudent', controller.getStudentById)
route.delete('/students/:legajoStudent', controller.deleteStudent)
route.put('/students/:legajoStudent', controller.replaceStudent)

export default route