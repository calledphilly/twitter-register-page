//importe de express
const express = require('express');
//création de la route
const router = express.Router()

router.get('/', (requests,respons) => {
  respons.status(200).json({message: 'Tous les utilisateurs'})
})


//export de la route
module.exports = router;