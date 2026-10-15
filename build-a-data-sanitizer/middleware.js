const inputCleaner = (req, res, next) => {
    if (req.body?.username) {
        req.body.username = req.body.username.toLowerCase();
    }
    if (req.body?.comment) {
        req.body.comment = req.body.comment.replace(/<[^>]*>/g, '');
    }

    return next();
};

const inputValidator = (req, res, next) => {
    if (req.body?.username && req.body.username.length >= 3) {
        console.log('Passed')
        return next();
    }

    console.log('Not passed');
    return res.redirect('/form?error=Username must be at least 3 characters.')
}

export { inputCleaner, inputValidator }