const express = require('express');
const { check } = require('express-validator');
const itemsController = require('../controllers/items.controller');
const validate = require('../middleware/validate.request');

const router = express.Router();

// GET /api/items
router.get('/', itemsController.getItems);

// POST /api/items
router.post(
    '/',
    [
        check('name').notEmpty().withMessage('Name is required'),
        check('price').isNumeric().withMessage('Price must be a number')
    ],
    validate,
    itemsController.createItem
);

// PUT /api/items/:id
router.put(
    '/:id',
    [
        check('name').optional().notEmpty().withMessage('Name is required'),
        check('price').optional().isNumeric().withMessage('Price must be a number')
    ],
    validate,
    itemsController.updateItem
);

// DELETE /api/items/:id
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
