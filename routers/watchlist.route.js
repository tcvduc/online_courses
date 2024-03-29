const {
    auth,
    authNav,
    authOTP,
    authAdmin,
} = require("./../middlewares/auth.mdw");

const express = require("express");
const router = express.Router();
const watchlistController = require("../controllers/watchlist.controller");

router.get("/", auth, authNav, authOTP, watchlistController.getListCourses);

router.get(
    "/byCat/:id",
    auth,
    authNav,
    authOTP,
    watchlistController.getCourseListByCat
);

router.post("/search", auth, watchlistController.searchCourse);
router.get("/search", auth, authNav, authOTP, watchlistController.searchCourse);

router.post("/method", auth, watchlistController.editWatchlist);

module.exports = router;