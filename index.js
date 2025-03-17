import express from 'express';

const app = express();
https://whataboutcoding.com/crud-in-react-js-using-axios-building-an-app-using-react-crud/
// app.get('/',(req, res) => {
//     res.send('Hello');
// });
app.get('/app/jokes',(req, res)=>{
    const jokes = [
        {
        id : 1,
        title: 'Joke 1',
        content : 'okay'
     },
        {
        id : 2,
        title: 'Joke 21',
        content : 'okay'
     },
        {
        id : 3,
        title: 'Joke 31',
        content : 'okay'
     }
    ];
    res.send(jokes);

})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
})
