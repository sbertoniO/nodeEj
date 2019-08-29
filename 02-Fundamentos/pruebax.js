const https = require('http')

const data = JSON.stringify({
    todo: 'Buy the milk'
})

const options = {
    hostname: '54.215.250.148:50752',
    port: 80,
    path: '/demo/sendOTP',
    method: 'POST',
    headers: {
        'clientId': '157345236',
        'telefono': '5562308643',
        'ambiente': 'Bridge'
    }
}

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.result}`)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
})

req.on('error', (error) => {
    console.error(error)
})

req.write(data)
req.end()