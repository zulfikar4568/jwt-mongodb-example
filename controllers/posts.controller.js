exports.getData = async (req, res) => {
    res.json({post: {title: 'my first post', description: 'random description'}})
}