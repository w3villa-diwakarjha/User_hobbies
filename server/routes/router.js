
const express = require('express');
const router = express.Router();

router.get('/users/:userId/hobbies', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await db.collection('users').findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const hobbies = await db.collection('hobbies').find({ userId }).toArray();
    res.json({ user, hobbies });
  } catch (error) {
    console.error('Error fetching hobbies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
