const { Brand } = require("../models/models");
const ApiError = require("../error/apiError");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    console.log("Brands in getAll ==== ", brands)
    return res.json(brands);
  }
}

module.exports = new BrandController();
