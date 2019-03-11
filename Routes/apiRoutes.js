const router = require('express').Router()
const bodyParser = require('body-parser')
const usaEpayRequest = require('../lib/usaEpayRequest')
router.use(bodyParser.json())

const products = [
  {
    name: 'Kill Jedi, Get Food',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71ClZoT5kLL._SL1500_.jpg',
    features: [
      'Acrylic Canvas',
      'Framed',
      '10" x 10"'
    ],
    price: 0.85
  }
]

router.get('/products', (req, res) => {
  res.json(products)
})

router.post('/transaction', (req, res) => {
  usaEpayRequest(req.body, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router
