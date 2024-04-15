import app from './app'
import {startConnection} from './database'

startConnection();
app.listen(3000)

console.log("server runing in port 3000")