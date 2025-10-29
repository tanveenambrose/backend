// const express = require('express');
// const app = express();
// const port = 3000;

// const users = require('./routes/route');
// const birds = require('./routes/birds');
// app.use('/birds', birds);
// app.use('/users', users);

// const loggingMiddleware = (req, res, next) => { 
//     console.log('Logging done ')
//     next();
// }
// const authMiddleware = (req, res, next) => {
//     console.log('Auth done ')
//     next();
// }
// const validationMiddleware = (req, res, next) => {
//     console.log('Verification done')
//     next();
// }

// app.use(loggingMiddleware);
// app.use(authMiddleware);
// app.use(validationMiddleware);


// app.get('/', (req, res) => {
//     res.sendFile('./dummby.html', { root: __dirname })
// })

// app.post('/items', (req, res) => {
//     res.send('Item created!');
// })

// app.put('/items/:id', (req, res) => {
//     res.json({ message: 'Item updated!' });
// })

// app.delete('/items/:id', (req, res) => {
//     res.send('Item deleted!');
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port https://localhost:${port}`);
// })












const express = require('express');
const app = express();
const connectDB = require('./db')

const port = 3006;

//body parser middleware
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    console.log('Home page accessed');
    res.send('Welcome to the Home Page!');
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})