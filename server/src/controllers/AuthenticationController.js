const { User } = require('../models')

User.bulkCreate([
  { email: 'test1', password: 'test1' },
  { email: 'test2', password: 'test2' },
  { email: 'test3', password: 'test3' },
  { email: 'test4', password: 'test4' },
  { email: 'test5', password: 'test5' },
  { email: 'test6', password: 'test6' },
  { email: 'test7', password: 'test7' },
  { email: 'test8', password: 'test8' }
])

module.exports = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(401).send({
          error: 'the login info was not correct'
        })
      }
      const isPasswordValid = password === user.password

      if (!isPasswordValid) {
        return res.status(401).send({
          error: 'the login info was not correct'
        })
      }

      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        validate: true
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error occured during login'
      })
    }
  }
}
