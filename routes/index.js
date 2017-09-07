const express = require('express');

const { getUser } = require('../controllers/users');
const { getAllTopics } = require('../controllers/topics');
const { getAllArticles, getArticlesByTopic, voteArticle  } = require('../controllers/articles');
const { getCommentsByArticle, postNewComment, deleteComment, voteComment} = require('../controllers/comments');

const router = express.Router();

router.get('/', (req, res) => res.send('Everything is fine!'));

router.get('/topics', getAllTopics);
router.get('/topics/:topic_id/articles', getArticlesByTopic);

router.get('/articles', getAllArticles);

router.get('/articles/:article_id/comments', getCommentsByArticle);

router.post('/articles/:article_id/comments', postNewComment);



module.exports = router;