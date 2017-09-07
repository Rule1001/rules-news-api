const Articles = require('../models/articles');

exports.getArticlesByTopic = (req, res, next) => {
    let { topic_id } = req.params;

    Articles.find({ belongs_to: topic_id })
        .then((articles) => {
            if (articles.length < 1) {
                return next({ status: 404, message: 'Topic not found' });
            }
            res.status(200).json({ articles });
        })
        .catch(next);
};

