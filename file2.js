//By Amneet singh 200537061 and Ramandeep Kaur 200535804
import express from 'express';

const app = express(); 
const PORT = 3005;
//import data from Json
//added assertion type
import data from './data/objects.json' assert{type: 'json'};


//Url: http://localhost:3005
app.get('/', (req, res) => {
    res.send('<h1>Group14: Amneet Singh and Ramandeep Kaur</h1>');
  });
//Url: http://localhost:3005/Objects
app.get('/Objects', (req, res) => {
   // res.send('<h1>Objects that were added :</h1>');
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
