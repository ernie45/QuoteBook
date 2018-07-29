const router = require("express").Router();
const quoteController = require("../../controllers/quoteController");

router.route("/")
.get((req, res, next) => {
    quoteController.pullDatabaseQuotes(req, res, next);
});

module.exports = router;