const Joi = require("joi");
const models = require("../../models");

const In = async (req, res) => {
  console.log("In REQ:", req);
  const { userName, inTime } = req.body;
  await models.UC_COMMUTE.create({
    UC_NAME: userName,
    UC_IN: inTime,
    // UC_OUT,
  });
  res.status(201).send(); // 201 Created
};

const Out = async (req, res) => {
  console.log("Out REQ:", req);
  const { userName, outTime, pairInTime} = req.body;

  await models.UC_COMMUTE.update(
    {
      UC_OUT: outTime,
    },
    {
      where: {
        UC_NAME: userName,
        UC_IN: pairInTime,
      },
    }
  );

  // await models.UC_COMMUTE.create({
  //   UC_NAME: userName,
  //   // UC_IN: inTime,
  //   UC_OUT: outTime,
  // });


  res.status(201).send(); // 201 Created
};

// router.post("/update", async (req, res) => {  // insert
//   try {
//     await models.board.update(
//       {
//         ID: req.body.id,
//         Writer : req.body.writer,
//         Title: req.body.title,
//         Content: req.body.content
//       },
//       {
//         where:
//         {
//           ID: req.body.id
//         }
//       }
//     );
//     res.json({ message: "게시글이 업데이트 되었습니다." });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

module.exports = { In, Out };
