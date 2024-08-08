document.getElementById('searchBtn').addEventListener('click', () => {
    const domain = document.getElementById('domainInput').value;
    
    if (domain) {
        fetch('http://localhost:3000/proxy/domain-check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                domain: domain,
                request: "https://www.atakdomain.com/domain-sorgulama"
            })
        })
        .then(response => response.text())  // Yanıtı text olarak al
        .then(data => {
            try {
                // Yanıtın JSON olup olmadığını kontrol et
                const jsonData = JSON.parse(data);
                if (jsonData.d && jsonData.d.AdditionalData) {
                    document.getElementById('result').innerHTML = jsonData.d.AdditionalData;
                } else {
                    document.getElementById('result').innerHTML = 'Beklenmeyen yanıt: ' + JSON.stringify(jsonData);
                }
            } catch (e) {
                // Yanıt JSON değilse, doğrudan HTML olarak göster
                document.getElementById('result').innerHTML = data;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Bir hata oluştu: ' + error.message;
        });
    } else {
        document.getElementById('result').innerHTML = 'Lütfen bir domain adresi girin.';
    }
});
