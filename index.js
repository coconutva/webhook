const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.webhook = functions.https.onRequest((req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const data = req.body;  // Obtém os dados enviados no webhook

    // Processa os dados ou armazena no Firestore
    console.log("Dados recebidos:", data);

    // Envia uma resposta ao remetente
    res.status(200).send('Webhook recebido com sucesso');
});
