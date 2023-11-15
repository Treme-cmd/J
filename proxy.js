const express = require('express');
const axios = require('axios'); // for making HTTP requests

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/proxy', async (req, res) => {
    const { url, method, headers, body } = req.body;

    try {
        const response = await axios({
            method,
            url,
            headers,
            data: body,
        });

        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
