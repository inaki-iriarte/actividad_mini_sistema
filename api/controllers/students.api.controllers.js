import * as service from '../../services/alumnos.services.js'

function getStudents(req, res) {
    service.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.status(200).json(alumnos)
        })
}

function createStudent(req, res) {
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: parseInt(req.body.año)
    }

    service.createAlumno(alumno)
        .then(function (alumno) {
            res.status(201).json(alumno)
        })
}

function getStudentById(req, res) {
    const legajo = parseInt(req.params.legajoStudent)

    service.getAlumnoById(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno #${legajo} no encontrado.` } })
            }
        })
}

function deleteStudent(req, res) {
    const legajo = parseInt(req.params.legajoStudent)

    service.deleteAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno #${legajo} no encontrado.` } })
            }
        })
}

function replaceStudent(req, res) {
    const legajo = parseInt(req.params.legajoStudent)
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: parseInt(req.body.año)
    }

    service.editAlumno(legajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno #${legajo} no encontrado.` } })
            }
        })
}

export {
    getStudents,
    createStudent,
    getStudentById,
    deleteStudent,
    replaceStudent
}