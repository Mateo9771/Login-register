const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login_system'
})

db.connect(err => {
    if (err) {
        console.error('Error al conectar la base de datos', err)
        return
    }
    console.log('Connectado a la base de datos')
})

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.post('/register', async(req,res) => {
    const {username, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    db.query('INSERT INTO users (username, email, password) VALUES(?,?,?)', [username, email, hashedPassword], (err, result) =>{
        if(err) {
            return res.status(500).send('Error al registrar usuario')
        }
        res.status(200).send('Usuario registrado exitosamente')
    })
})

app.post('/login', (req,res) => {
    const {email, password} = req.body
    db.query('SELECT * FROM users WHERE email = ?', [email], async(err, result) =>{
        if (err) {
            console.error('Error al buscar usuario:', err);
            res.status(500).send('Error al iniciar sesión');
            return;
        }
        if (result.length === 0){
            res.status(401).send('Correo o contraseña incorrectos');
            return;
        }
        const user = result[0]
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(400).send('Contraseña invalida')
        }
        const token = jwt.sign({ id: user.id}, 'tu-token-secreto', { expiresIn: '1h'
        })
        res.status(200).send({token})
    })
})

app.listen(5000, () => {
    console.log('Server en puerto 5000')
})