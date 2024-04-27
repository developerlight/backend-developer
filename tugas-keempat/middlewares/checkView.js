const cache = require("../utils/cache.js");
const { WithParams } = require("../utils/query.js");

const checkView = async (req, res, next) => {
  try {
    const { nim } = req.params;
    if (!nim) {
      return res.status(400).send("NIM is required");
    }

    const result = await WithParams("SELECT * FROM mahasiswa WHERE nim = ?", [
      nim,
    ]);

    if (result.length === 0) {
      return res.status(404).send("Data not found");
    }

    const view = result[0].view + 1;
    const value = cache.get("/v2/get");
    const valueJSON = value ? JSON.parse(value) : value;
    cache.set(
      "/v2/get",
      value
        ? JSON.stringify(
            valueJSON?.map((data) => ({
              ...data,
              view: data.nim == nim ? view : data.view,
            }))
          )
        : undefined
    );

    await WithParams("UPDATE mahasiswa SET view = ? WHERE nim = ?", 
      [view, nim]
    );

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = checkView;
