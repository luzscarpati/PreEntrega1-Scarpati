import styles from './App.module.css'

function App() {
  const turnos = [
    {"id": 1, "fecha": "3 de septiembre", "hora": "08:00", "especialidad": "obstetricia", "profesional": "Dr. Sánchez", "img": "./src/assets/img/sanchez.jpg"},
    {"id": 2, "fecha": "4 de septiembre", "hora": "09:30", "especialidad": "ginecologia", "profesional": "Dra. Rodríguez", "img": "./src/assets/img/rodriguez.jpg"},
    {"id": 3, "fecha": "5 de septiembre", "hora": "10:30", "especialidad": "ive-ile", "profesional": "Dra. Martínez", "img": "./src/assets/img/martinez.jpg"},
    {"id": 4, "fecha": "6 de septiembre", "hora": "08:30", "especialidad": "obstetricia", "profesional": "Dr. Guida", "img": "./src/assets/img/guida.jpg"},
    {"id": 5, "fecha": "7 de septiembre", "hora": "10:00", "especialidad": "ginecologia", "profesional": "Dr. Fernández", "img": "./src/assets/img/fernandez.jpg"},
    {"id": 6, "fecha": "8 de septiembre", "hora": "09:30", "especialidad": "ive-ile", "profesional": "Dra. Ramírez", "img": "./src/assets/img/ramirez.jpg"},
    {"id": 7, "fecha": "9 de septiembre", "hora": "10:30", "especialidad": "obstetricia", "profesional": "Dra. Gómez", "img": "./src/assets/img/gomez.jpg"},
    {"id": 8, "fecha": "10 de septiembre", "hora": "11:00", "especialidad": "ginecologia", "profesional": "Dra. Rodríguez", "img": "./src/assets/img/rodriguez.jpg"},
    {"id": 9, "fecha": "11 de septiembre", "hora": "08:30", "especialidad": "ive-ile", "profesional": "Dr. Sánchez", "img": "./src/assets/img/sanchez.jpg"},
    {"id": 10, "fecha": "12 de septiembre", "hora": "10:30", "especialidad": "ginecologia", "profesional": "Dr. Fernández", "img": "./src/assets/img/fernandez.jpg"},
    {"id": 11, "fecha": "13 de septiembre", "hora": "09:30", "especialidad": "ginecologia", "profesional": "Dra. Martínez", "img": "./src/assets/img/martinez.jpg"},
    {"id": 12, "fecha": "14 de septiembre", "hora": "08:30", "especialidad": "ive-ile", "profesional": "Dra. González", "img": "./src/assets/img/gonzalez.jpg"},
    {"id": 13, "fecha": "15 de septiembre", "hora": "10:00", "especialidad": "ginecologia", "profesional": "Dra. Ramírez", "img": "./src/assets/img/ramirez.jpg"},
    {"id": 14, "fecha": "16 de septiembre", "hora": "08:30", "especialidad": "ive-ile", "profesional": "Dra. Gómez", "img": "./src/assets/img/gomez.jpg"},
    {"id": 15, "fecha": "17 de septiembre", "hora": "10:30", "especialidad": "ginecologia", "profesional": "Dra. Rodríguez", "img": "./src/assets/img/rodriguez.jpg"},
    {"id": 16, "fecha": "18 de septiembre", "hora": "09:30", "especialidad": "ive-ile", "profesional": "Dr. Sánchez", "img": "./src/assets/img/sanchez.jpg"},
    {"id": 17, "fecha": "19 de septiembre", "hora": "11:00", "especialidad": "obstetricia", "profesional": "Dr. Fernández", "img": "./src/assets/img/fernandez.jpg"},
    {"id": 18, "fecha": "20 de septiembre", "hora": "08:30", "especialidad": "ive-ile", "profesional": "Dra. Martínez", "img": "./src/assets/img/martinez.jpg"},
    {"id": 19, "fecha": "21 de septiembre", "hora": "10:00", "especialidad": "obstetricia", "profesional": "Dra. González", "img": "./src/assets/img/gonzalez.jpg"},
    {"id": 20, "fecha": "22 de septiembre", "hora": "09:30", "especialidad": "ginecologia", "profesional": "Dra. Ramírez", "img": "./src/assets/img/ramirez.jpg"}
  ];
  return (
    <div>
      <h1>Turnos Disponibles</h1>
      <h2>Ginecología - Turnos Disponibles</h2>
      <ul className={styles.turnosEspecialidad}>
        {turnos.filter(turno => turno.especialidad === "ginecologia").map( turno => (
            <li key={turno.id} className={styles.cardprofesional}>
            {turno.profesional}
            <img src={turno.img} alt={turno.profesional} className={styles.imgProfesionales}/>
             {turno.fecha} <br/> {turno.hora}hs
          </li>
          ))}
      </ul>
      <h2>Obstetricia - Turnos Disponibles</h2>
      <ul className={styles.turnosEspecialidad}>
        {turnos.filter(turno => turno.especialidad === "obstetricia").map( turno => (
            <li key={turno.id} className={styles.cardprofesional}>
            {turno.profesional}
            <img src={turno.img} alt={turno.profesional} className={styles.imgProfesionales}/>
             {turno.fecha} <br/> {turno.hora}hs
          </li>
          ))}
      </ul>
      <h2>IVE-ILE - Turnos Disponibles</h2>
      <ul className={styles.turnosEspecialidad}>
        {turnos.filter(turno => turno.especialidad === "ive-ile").map( turno => (
            <li key={turno.id} className={styles.cardprofesional}>
              {turno.profesional}
              <img src={turno.img} alt={turno.profesional} className={styles.imgProfesionales}/>
               {turno.fecha} <br/> {turno.hora}hs
            </li>
          ))}
      </ul>
    </div>
  )   
}

export default App