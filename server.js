const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/proxy/domain-check', async (req, res) => {
    try {
        const response = await axios.post('https://www.atakdomain.com/service/domain/check-availability', req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'SID=jm1u32ontax5xzqqsguocbau; CartOrder=0x01000000fb7ba6cefad4519409fd63b05c300d241897bb90258d0c38e292dfbcb5c02e5a; _ga=GA1.1.2098043407.1723071098; twk_idm_key=o0fAEvYcjcki6KPXMQKQA; TawkConnectionTime=0; _ga_K1RSBYPQTB=GS1.1.1723075540.2.0.1723075540.0.0.0; _ga_DWNYW7PT34=GS1.1.1723075540.2.0.1723075540.0.0.0; cto_bundle=MwQj119FUWhtZGtpeXNTbGxqUUlOMyUyRnJBMWFFJTJCUDI5OWtpSlRCUVRlY2NSJTJCdGVWQkxBTHUxRDhxWkglMkJMak84JTJGMmlSeGE5MW5rWDNtUnhIaU9HYW1FZzg5QyUyRkJTUkFBcDI5UFc5JTJGVUVsN2h6dm9xenF2OEdUWmd0WFBuWXU5dU1CdW5ZcmlXWkowRWZGTmFDNzFFOTJZZERCMFVJa1FzbUtISGJFJTJCUDlzQkhQMDE4JTNE; cf_clearance=cSd2JTkBDpMZjgMa36RSfWwIMtJEaCdFUkZ65StXDoE-1723075542-1.0.1.1-bN45zJqHU7nOkAUf1gTCTw4jeCqcMcpVu7DnmKzammrowuUMQFxJEvUAGJGBao2YU3.THcHkXiQLdQRgs4iFIA'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
