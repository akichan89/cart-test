const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

const auth = require('./config/auth')(passport)
const home = require('./routes/home')
const register = require('./routes/register')
const login = require('./routes/login')
const account = require('./routes/account')
const admin = require('./routes/admin')

const uri = "mongodb+srv://admin:Jarofdirt%231@cluster0.r0hc5.mongodb.net/<sample-store>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))



const app = express()
app.use(session({
	secret: 'awehfuilawef',
	resave: true,
	saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', home)
app.use('/register', register)
app.use('/login', login)
app.use('/account', account)
app.use('/admin', admin)

app.use((err, req, res, next) => {
	console.log('ERROR: ' + err)
	res.render('error', {message: err.message})
})

app.listen(5000)
console.log('App running on http://localhost:5000')


