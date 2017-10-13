const router = require('express').Router();
const picturesController = require('../controllers/picturesController');

router
  .get('/pictures', picturesController.getAllPictures)
  .post('/pictures', picturesController.addPicture)
  .delete('/pictures', picturesController.deletePicture);

module.exports = router;
