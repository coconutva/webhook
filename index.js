const express = require('express');
const app = express();

const port = process.env.PORT || 8080;  // Use a variável de ambiente PORT ou 8080 por padrão
app.get('/', (req, res) => {
  res.send('Hello from Cloud Run!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
