const express = require("express");
const router = express.Router();
const Overall = require("../models/overall");
const Country = require("../models/country");
const Device = require("../models/device");

router.post("/", async (req, res) => {
  const addingoveralls = await Overall.findOne();
  if (addingoveralls === null) {
    const creatingOverall = await new Overall({
      overallwerbreq: 0,
      overalltimespent: 0,
    });
    await creatingOverall.save();
  }
  const countryExist = await Country.findOne({
    country: req.body.dim[1].country,
  });
  if (countryExist) {
    const deviceExist = await Device.findOne({
      device: req.body.dim[0].device,
      which: req.body.dim[1].country,
    });

    if (deviceExist) {
      //if device exists then
      let prevwebreq = deviceExist.devicewerbreq;
      let prevtimespent = deviceExist.devicetimespent;
      let prevcountrywerbreq = countryExist.countrywerbreq;
      let prevcountrytimespent = countryExist.countrytimespent;
      const prevOverall = await Overall.find();
      let prevOverallWebreq = prevOverall[0].overallwerbreq;
      let prevOverallTimespent = prevOverall[0].overalltimespent;

      //second if
      if (req.body.metrics[0].timespent && !req.body.metrics[0].webreq) {
        const addoverall = await Overall.updateOne(
          {},
          {
            // overallwerbreq: prevOverallWebreq + req.body.metrics[0].webreq,
            overalltimespent:
              prevOverallTimespent + req.body.metrics[0].timespent,
          }
        );
        const countryoverall = await Country.updateOne(
          { country: countryExist.country },
          {
            // countrywerbreq: prevcountrywerbreq + req.body.metrics[0].webreq,
            countrytimespent:
              prevcountrytimespent + req.body.metrics[0].timespent,
          }
        );
        const deviceOverall = await Device.updateOne(
          { device: deviceExist.device, which: deviceExist.which },
          {
            // devicewerbreq: prevwebreq + req.body.metrics[0].webreq,
            devicetimespent: prevtimespent + req.body.metrics[0].timespent,
          }
        );
        return res.send({
          message: "Successfuly Updated the device details",
        });
      }
      //third if
      else if (req.body.metrics[0].webreq && !req.body.metrics[1].timespent) {
        const addoverall = await Overall.updateOne(
          {},
          {
            overallwerbreq: prevOverallWebreq + req.body.metrics[0].webreq,
            //   overalltimespent:
            //     prevOverallTimespent + req.body.metrics[0].timespent,
          }
        );
        const countryoverall = await Country.updateOne(
          { country: countryExist.country },
          {
            countrywerbreq: prevcountrywerbreq + req.body.metrics[0].webreq,
            //   countrytimespent:
            //     prevcountrytimespent + req.body.metrics[0].timespent,
          }
        );
        const deviceOverall = await Device.updateOne(
          { device: deviceExist.device, which: deviceExist.which },
          {
            devicewerbreq: prevwebreq + req.body.metrics[0].webreq,
            //   devicetimespent: prevtimespent + req.body.metrics[0].timespent,
          }
        );
        return res.send({ message: "Successfuly Updated the device details" });
      } else {
        const addoverall = await Overall.updateOne(
          {},
          {
            overallwerbreq: prevOverallWebreq + req.body.metrics[0].webreq,
            overalltimespent:
              prevOverallTimespent + req.body.metrics[1].timespent,
          }
        );
        const countryoverall = await Country.updateOne(
          { country: countryExist.country },
          {
            countrywerbreq: prevcountrywerbreq + req.body.metrics[0].webreq,
            countrytimespent:
              prevcountrytimespent + req.body.metrics[1].timespent,
          }
        );
        const deviceOverall = await Device.updateOne(
          { device: deviceExist.device, which: deviceExist.which },
          {
            devicewerbreq: prevwebreq + req.body.metrics[0].webreq,
            devicetimespent: prevtimespent + req.body.metrics[1].timespent,
          }
        );
        const checking = await Device.find({
          device: deviceExist.device,
          which: deviceExist.which,
        });
        return res.send({
          message: "Successfuly Updated the device details",
        });
      }
    } else {
      // device doesnt exists

      const newDevice = await new Device({
        device: req.body.dim[0].device,
        devicewerbreq: req.body.metrics[0].webreq,
        devicetimespent: req.body.metrics[1].timespent,
        which: req.body.dim[1].country,
      });
      newDevice.save();

      let prevcountrywerbreq = countryExist.countrywerbreq;
      let prevcountrytimespent = countryExist.countrytimespent;
      const prevOverall = await Overall.find();
      let prevOverallWebreq = prevOverall[0].overallwerbreq;
      let prevOverallTimespent = prevOverall[0].overalltimespent;

      if (req.body.metrics[0].webreq && req.body.metrics[1].timespent) {
        const addoverall = await Overall.updateOne(
          {},
          {
            overallwerbreq: prevOverallWebreq + req.body.metrics[0].webreq,
            overalltimespent:
              prevOverallTimespent + req.body.metrics[1].timespent,
          }
        );
        const countryoverall = await Country.updateOne(
          { country: countryExist.country },
          {
            countrywerbreq: prevcountrywerbreq + req.body.metrics[0].webreq,
            countrytimespent:
              prevcountrytimespent + req.body.metrics[1].timespent,
          }
        );
        const checking = await Country.find({
          device: countryExist.country,
        });
      }
      return res.send({ message: "Successfuly Created a device " });
    }
  } else {
    //creating new country  --->
    const newCountry = await new Country({
      country: req.body.dim[1].country,
      countrywerbreq: req.body.metrics[0].webreq,
      countrytimespent: req.body.metrics[1].timespent,
    });
    const newDevice = await new Device({
      device: req.body.dim[0].device,
      devicewerbreq: req.body.metrics[0].webreq,
      devicetimespent: req.body.metrics[1].timespent,
      which: req.body.dim[1].country,
    });
    const prevOverall = await Overall.find();
    let prevOverallWebreq = prevOverall[0].overallwerbreq;
    let prevOverallTimespent = prevOverall[0].overalltimespent;
    // if (prevOverallWebreq != 0 && prevOverallTimespent != 0) {
    const addoverall = await Overall.updateOne(
      {},
      {
        overallwerbreq: prevOverallWebreq + req.body.metrics[0].webreq,
        overalltimespent: prevOverallTimespent + req.body.metrics[1].timespent,
      }
    );
    // }

    await newDevice.save();
    await newCountry.save();

    return res.send({ message: "Successfuly Created a Country " });
  }
  return res.send({
    message: "Couldnt update the status, make sure the values are correct",
  });
});
module.exports = router;
