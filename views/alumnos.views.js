function createAlumnosListPage(alumnos) {
    let html = `<h1>Lista de alumnos</h1>`
    html += '<ul>'

    for (let i = 0; i < alumnos.length; i++) {
        html += `<li>${alumnos[i].nombre} ${alumnos[i].apellido} | <a href="/alumnos/${alumnos[i].legajo}">Ver</a> | <a href="/alumnos/${alumnos[i].legajo}/edit">Modificar</a> | <a href="/alumnos/${alumnos[i].legajo}/delete">Eliminar</a> </li>`
    }

    html += '</ul>'

    return createPage('Lista de Alumnos', html)
}

function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<link rel="stylesheet" href="/css/styles.css">'

    html += '<title>' + title + '</title></head><body>'

    html += '<nav><a href="/">Inicio</a> | <a href="/alumnos">Alumnos</a> | <a href="/alumnos/nuevo">Nuevo Alumno</a></nav>'

    html += content

    html += '</body></html>'

    return html
}

function createAlumnoPage(alumno) {
    let html = `<h1>Detalle del alumno</h1>`
    html += `<p>Nombre: ${alumno.nombre}</p>`
    html += `<p>Apellido: ${alumno.apellido}</p>`
    html += `<p>Número de legajo: ${alumno.legajo}</p>`
    html += `<p>Año de inscripción: ${alumno.año}</p>`

    return createPage(alumno.nombre, html)
}

function createNewAlumnoPage() {
    let html = `<h1>Añadir nuevo alumno</h1>`
    html += `<form action="/alumnos/nuevo" method="POST" enctype="application/x-www-form-urlencoded">
    <label for="nombre">Nombre: 
            <input type="text" name="nombre" id="nombre">
    </label>

    <label for="apellido">Apellido: 
        <input type="text" name="apellido" id="apellido">
    </label>

    <label for="año">Año de inscripción: 
        <input type="number" name="año" id="año">
    </label>
    
    <input type="submit" value="Añadir">
    </form>`

    return createPage('Añadir nuevo alumno', html)
}

function formEditAlumno(alumno) {
    let html = `<h1>Modificar datos del alumno #${alumno.legajo}</h1>`

    html += `<form action="/alumnos/${alumno.legajo}/edit" method="POST" enctype="application/x-www-form-urlencoded">
    <label for="nombre">Nombre: 
        <input type="text" name="nombre" id="nombre" value="${alumno.nombre}">
    </label>

    <label for="apellido">Apellido: 
        <input type="text" name="apellido" id="apellido" value="${alumno.apellido}">
    </label>

    <label for="año">Año de inscripción:
        <input type="number" name="año" id="año" value="${alumno.año}" />
    </label>

    <button type="submit">Modificar</button>
    </form>`

    return createPage('Modificar Alumno', html)
}

function formDeleteAlumno(alumno) {
    let html = `<h1>Eliminar alumno #${alumno.legajo}</h1>`

    html += `<h2>${alumno.nombre} ${alumno.apellido}</h2>`
    html += `<p>Año de inscripción: ${alumno.año}</p>`
    html += `<p>Número de legajo: ${alumno.legajo}</p>`

    html += `<form action="/alumnos/${alumno.legajo}/delete" method="POST" enctype="application/x-www-form-urlencoded">
    <p>¿Estás seguro de que quieres eliminar el alumno ${alumno.nombre} ${alumno.apellido}?</p>
    <button type="submit">Eliminar</button>
    </form>`

    return createPage('Eliminar Alumno', html)
}

export {
    createAlumnosListPage,
    createPage,
    createAlumnoPage,
    createNewAlumnoPage,
    formEditAlumno,
    formDeleteAlumno
}