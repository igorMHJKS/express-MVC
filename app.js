const express = require('express');
const app = express();
const port = 3000;
const userRoute= require('./src/routes/userRouter');

app.use(userRoute)



app.listen(port, () => {
   console.log('Estamos rodando na porta:' + port)
})
;
  
