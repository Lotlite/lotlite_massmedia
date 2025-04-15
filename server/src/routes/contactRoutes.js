const express = require('express');
const router = express.Router();
const {
  createContact,
  getContacts,
  getContact,
  deleteContact,
  acceptContact
} = require('../controllers/contactController');

// Contact routes
router.route('/')
  .post(createContact)
  .get(getContacts);

router.route('/:id')
  .get(getContact)
  .delete(deleteContact);

router.route('/:id/accept')
  .put(acceptContact);

module.exports = router; 