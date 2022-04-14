const { Brand } = require("../models/models");
const ApiError = require("../error/apiError");

class BrandController {
  async create(req, res) {
    // let body = "";
    // let name = "";
    // req.on("data", (chunk) => {
    //   body += chunk.toString();
    // });
    // req.on("end", () => {
    //   console.log("ТЕЛО ЗАПРОСА: ", body);
    //   let parsedBody = JSON.parse(body);
    //   console.log("parsedBody = ", parsedBody);
    //   name = parsedBody.name;
    //   console.log("name: ", name);
    //   const brandPromise = new Promise((resolve, reject) => resolve(Brand.create({name})));
    //   brandPromise.then(console.log("brandPromise: ", brandPromise));
    //   return res.json(brandPromise);
    // });
    
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
