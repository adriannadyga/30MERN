const express = require ('express');
const cors = require ('cors');

const app = express();

//middleware
//bez opcji - każde połączenie z zewnątrz będzie akceptowane
app.use(cors());
//body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//endpoint symulujący zwracanie tablicy postów z bazy danych
app.get('/api/posts', (req, res) => {
    const data = [
        { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
});

app.listen(8000, function() {
    console.log('Server is running on port:', 8000);
});