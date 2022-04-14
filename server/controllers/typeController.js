const { Type } = require("../models/models");
const ApiError = require("../error/apiError");

class TypeController {
  async create(req, res, next) {
    // let body = "";
    // let name = "";
    // req.on("data", (chunk) => {
    //   body += chunk.toString();
    // });
    // console.log("BODY ===== ", req)
    // req.on("end", () => {
    //   console.log("ТЕЛО ЗАПРОСА: ", body);
    //   let parsedBody = JSON.parse(body);
    //   console.log("parsedBody = ", parsedBody);
    //   name = parsedBody.name;
    //   console.log("name: ", name);
    //   const typePromise = new Promise((resolve, reject) => resolve(Type.create({name})));
    //   typePromise.then(console.log("typePromise: ", typePromise));
    //   return res.json(typePromise);
    // });
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
