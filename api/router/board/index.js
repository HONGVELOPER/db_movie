const router = require('express').Router();
const { isPlainObject } = require('jquery');
// const boardFunction = require('./boardFunction.js');
const models = require('../../models');


router.post("/update", async (req, res) => {  // insert
    try {
      await models.B_BOARD.update(
        {
          ID: req.body.id,
          Writer : req.body.writer,
          Title: req.body.title,
          Content: req.body.content
        },
        {
          where:
          {
            ID: req.body.id
          }
        }
      );
      res.json({ message: "게시글이 업데이트 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  router.post("/write", async (req, res) => {  // insert
    try {
      let obj;
      obj = {
        // ID: req.body.id,
        Writer : req.body.writer,
        Title: req.body.title,
        Content: req.body.content
      };
    // console.log(obj);
    //   const board = new board(obj); // 스키마 만들기
      await models.B_BOARD.create(obj); // insert
      res.json({ message: "게시글이 업로드 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });


router.post("/list", async (req, res) => {  
  console.log('list 라우터 진입');
  // console.log(req.body.ID);
  try {
    const board = await models.B_BOARD.findAll({
      raw: true
    });
    res.json({list : board});
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});


router.post("/detail", async (req, res) => {  
  console.log('detail 라우터 진입');
  try {
    const ID = req.body.ID;
    const board = await models.B_BOARD.findAll({
      raw: true,
      where: {
        ID : req.body.ID
      }
    });
    // console.log(board);
    res.json({list : board});
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/delete", async (req, res) => {  
  console.log('delete 라우터 진입');
  console.log(req.body.ID);
  try {
    await models.B_BOARD.destroy({
      where : {ID:req.body.ID},
      truncate : false
  });
  res.json({message: true});
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;