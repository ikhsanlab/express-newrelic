let items = [];

exports.getItems = (req, res) => {
    res.json(items);
};

exports.createItem = (req, res) => {
    const { name, price } = req.body;
    const newItem = { id: items.length + 1, name, price };
    items.push(newItem);
    res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const item = items.find(i => i.id == id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    if (name) item.name = name;
    if (price) item.price = price;

    res.json(item);
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    items = items.filter(i => i.id != id);
    res.status(204).send();
};
