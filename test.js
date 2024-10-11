const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Middleware para aceitar requisições JSON
app.use(express.json());

// Endpoint do webhook
app.post('/webhook', (req, res) => {
    // Aqui você pode processar os dados recebidos no corpo da requisição (req.body)
    const data = req.body;
    console.log('Webhook recebido:', data);

    // Responder com sucesso
    res.status(200).send('Webhook recebido com sucesso!');
});

// Exporta a função para ser usada no Firebase Functions
exports.webhook = functions.https.onRequest(app);

