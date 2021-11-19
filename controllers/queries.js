const express = require("express");
const router = express.Router();

const Overall = require("../models/overall");
const Country = require("../models/country");
const Device = require("../models/device");

router.get("/overall", async (req, res) => {
  const overallRT = await Overall.find();
  res.json({
    "Total Web Requests": overallRT[0].overallwerbreq,
    "Total Time Spent": overallRT[0].overalltimespent,
  });
});
router.get("/country", async (req, res) => {
  const countryFind = await Country.findOne({
    country: req.body.dim[0].country,
  });
  try {
    res.json({
      dim: [
        {
          country: countryFind.country,
        },
      ],
      metrics: [
        {
          webreq: countryFind.countrywerbreq,
        },
        {
          timespent: countryFind.countrytimespent,
        },
      ],
    });
  } catch (error) {
    res.json({ message: "Couldnot find the country in the tree" });
  }
});

router.get("/device", async (req, res) => {
  const deviceFind = await Device.findOne(
    {
      device: req.body.dim[0].device,
    } || { which: req.body.dim[1].country }
  );

  try {
    res.json({
      dim: [
        {
          country: deviceFind.which,
        },
        {
          device: deviceFind.device,
        },
      ],
      metrics: [
        {
          webreq: deviceFind.devicewerbreq,
        },
        {
          timespent: deviceFind.devicetimespent,
        },
      ],
    });
  } catch (error) {
    res.json({ message: "Couldnot find the Device in the tree" });
  }
});

module.exports = router;
