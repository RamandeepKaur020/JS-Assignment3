//By Amneet singh 200537061 and Ramandeep Kaur 200535804
import express from 'express';
const app = express(); 
const PORT = 3005;



app.get('/', (req, res) => {
    res.send('<h1>Group14: Amneet Singh and Ramandeep Kaur</h1>');
  });
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
