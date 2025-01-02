const express = require('express');
const Report = require('../models/Report');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, data } = req.body;
  try {
    const report = new Report({ userId, data });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const reports = await Report.find({ userId });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;