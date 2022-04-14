const Router = require("express");
const { model } = require("../db");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
