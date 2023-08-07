const { nanoid } = require("nanoid");
const validUrl = require("valid-url");
const db = require("./config/firebase");
const { collection } = require("./config/env");

const controller = {};

controller.shorten = async (req, res) => {
  try {
    let { url, short_code } = req.body;
    if (url == null) {
      return res.status(400).json({
        status: "failed",
        message: "Url not found",
      });
    } else if (validUrl.isUri(url) == undefined) {
      return res.status(400).json({
        status: "failed",
        message: "Url is not valid",
      });
    } else {
      short_code = short_code == null ? nanoid(10) : short_code;
      const data = {
        original_url: url,
        short_code: short_code,
        created_at: new Date(),
        click_count: 0,
      };
      const ref = db.collection(collection);
      const shortCodeCheck = await ref
        .where("short_code", "==", short_code)
        .get();
      if (!shortCodeCheck.empty) {
        return res.status(400).json({
          status: "failed",
          message: "Short code unavailable",
        });
      }
      await ref.add(data);
      return res.status(200).json({
        status: "success",
        data: data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      data: error.message,
    });
  }
};

controller.redirect = async (req, res) => {
  const short_code = req.params.short_code;
  const ref = db.collection(collection);
  const snapshot = await ref.where("short_code", "==", short_code).get();
  if (snapshot.empty) {
    return res.status(400).json({
      status: "failed",
      message: "Short code not found",
    });
  } else {
    let data = {};
    snapshot.forEach((doc) => {
      data.original_url = doc.data().original_url;
      data.short_code = doc.data().short_code;
    });
    return res.status(200).json({
      status: "success",
      data,
    });
  }
};

module.exports = controller;
