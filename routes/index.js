const express = require('express');

const { getUser } = require('../controllers/users');
const { getAllTopics } = require('../controllers/topics');
const { getAllArticles, getArticlesByTopic, voteArticle  } = require('../controllers/articles');
const { getCommentsByArticle, postNewComment, deleteComment, voteComment} = require('../controllers/comments');

const router = express.Router();

router.get('/', (req, res) => res.send('Everything is fine!'));

module.exports = router;