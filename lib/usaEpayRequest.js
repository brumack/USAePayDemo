const request = require('request')
const crypto = require('crypto')
let auth

if (process.env.API_KEY === undefined) {
  auth = require('./auth')
}

module.exports = function (paymentParams, callback) {
  const { expMonth, expYear, amount, live, ...creditcard } = paymentParams

  creditcard.expiration = expMonth + expYear
  const payload = {
    command: 'cc:sale',
    amount,
    creditcard
  }

  const path = live ? 'https://usaepay.com' : 'https://sandbox.usaepay.com'

  const options = {
    method: 'POST',
    url: path + '/api/v2/transactions',
    headers: {
      'User-Agent': 'uelib v6.8',
      'Content-Type': 'application/json',
      'Authorization': generateAuth(live)
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

function generateAuth(isLive) {
  if (isLive) {
    const key = process.env.API_KEY || auth.API_KEY
    const pin = process.env.API_PIN || auth.API_PIN
    const seed = Math.floor(Math.random() * 100000000)
    const prehash = key + seed + pin
    const shaHash = crypto.createHash('sha256').update(prehash).digest('hex')
    const apihash = 's2/' + seed + '/' + shaHash
    const authKey = Buffer.from(key + ':' + apihash).toString('base64')
    return `Basic ${authKey}`
  } else {
    return 'Basic X1Y4N1F0YjUxM0NkM3ZhYk03UkMwVGJ0SldlU284cDc6czIvYWJjZGVmZ2hpamtsbW5vcC9iNzRjMmZhOTFmYjBhMDk3NTVlMzc3ZWU4ZTIwYWE4NmQyYjkyYzNkMmYyNzcyODBkYjU5NWY2MzZiYjE5MGU2'
  }
}
