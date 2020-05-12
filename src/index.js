const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById("5ebabb32351ffc329da1cec3")
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5ebaba781c30f5325e01756b')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()