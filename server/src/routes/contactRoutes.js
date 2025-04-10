const express = require('express');
const router = express.Router();
const {
  createContact,
  getContacts,
  getContact
} = require('../controllers/contactController');

// Contact routes
router.route('/')
  .post(createContact)
  .get(getContacts);

router.route('/:id')
  .get(getContact);

module.exports = router; 