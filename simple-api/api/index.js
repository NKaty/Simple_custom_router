const router = require('express').Router();
const mocks = require('./mock');

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

router.get('/articles', function(req, res, next) {
  const articles = mocks.articles.map(function(article) {
    return Object.assign({}, article, {
      text: undefined
    });
  });

  reply(res, articles);
});

router.get('/articles/:id', function(req, res, next) {
  const article = mocks.articles.filter(function(article) {
    return article.id == req.params.id;
  })[0];
  if (article) return reply(res, article, 950);

  reply(res, { error: 'not found' }, 100, 404);
});

router.get('/comments', function(req, res, next) {
  const aid = req.query.article;
  if (aid) {
    const article = mocks.articles.find(function(article) {
      return article.id == aid;
    });
    return reply(
      res,
      (article.comments || []).map(function(id) {
        return mocks.comments.find(function(comment) {
          return comment.id == id;
        });
      })
    );
  }

  reply(res, mocks.comments);
});

module.exports = router;
