const express = require('express')
const tokenobj = require('../Token/token')
const jwtToken = require('jsonwebtoken')
module2 = express.Router()

module2.get('/', (req, res) => {
   let header = req.headers.token
   if (header == tokenobj.token1) {
      jwtToken.verify(tokenobj.token1, 'skill', function (err, decoded) {
         if (err) {
            res.json({ token: "expire" });
         }
         else {
            res.json({ module2: "Successful Jsonwebtoken..." })
         }
      }
      )
   }
   else {
      res.json({ module2: "Fail" })
   }
})

module.exports = module2