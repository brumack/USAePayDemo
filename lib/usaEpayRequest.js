const request = require('request')
const credentials = require('./credentials')
const crypto = require('crypto')
const sha256 = require('sha256')

module.exports = function (paymentParams, callback) {
  const { expMonth, expYear, amount, ...creditcard } = paymentParams

  creditcard.expirartion = expMonth + expYear
  const payload = {
    command: 'cc:sale',
    amount,
    creditcard
  }

  const path = paymentParams.live ? 'https://usaepay.com' : 'https://sandbox.usaepay.com'

  const options = {
    method: 'POST',
    url: path + '/api/v2/transactions',
    headers: {
      'User-Agent': 'uelib v6.8',
      'Content-Type': 'application/json',
      'Authorization': generateAuth(paymentParams.live)
    },
    'body': JSON.stringify(payload)
  }

  request(options, (err, res, body) => {
    if (err) {
      return callback(err)
    }
    return callback(null, body)
  })
}

function generateAuth(live) {
  if (live) {
    const seed = Math.floor(Math.random() * 100000000)
    const prehash = credentials.api_key + seed + credentials.api_pin
    console.log('preshash', prehash)
    const shaHash = crypto.createHash('sha256').update(prehash).digest('hex')
    console.log('shahash', shaHash)
    const apihash = 's2/' + seed + '/' + shaHash
    console.log('apihash', apihash)
    const authKey = Buffer.from(credentials.api_key + ':' + apihash).toString('base64')
    console.log('authKey', authKey)
    return `Basic ${authKey}`
  } else {
    return 'Basic X1Y4N1F0YjUxM0NkM3ZhYk03UkMwVGJ0SldlU284cDc6czIvYWJjZGVmZ2hpamtsbW5vcC9iNzRjMmZhOTFmYjBhMDk3NTVlMzc3ZWU4ZTIwYWE4NmQyYjkyYzNkMmYyNzcyODBkYjU5NWY2MzZiYjE5MGU2'
  }
}
