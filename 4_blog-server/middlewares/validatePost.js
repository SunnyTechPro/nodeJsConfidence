module.exports = (req, res, next) => {
    const { title, content } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ message: 'Invalid title' });
    }

    if (!content || typeof content !== 'string' || content.trim() === '') {
        return res.status(400).json({ message: 'Invalid content' });
    }

    next();
}