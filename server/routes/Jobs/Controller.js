const Jobs = require('../../models/Jobs')

const getAll = (req, res) => {
  Jobs.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the user list', error: err })
    res.send(products)
  })
}

const getById = (req, res) => {
  Jobs.findById(req.params.id, (err, jobs) => {
    if (err)
      res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
    res.send(jobs)
  })
}
const insert = (req, res) => {
  const jobs = new Jobs({
    photo: 'public/uploads/Works/gasda.jpg',
    companyName: req.body.companyName,
    description: req.body.description,
    requirements: req.body.requirements,
    contactMail: req.body.contactMail,
    category: req.body.category,
    approximateSalary: req.body.approximateSalary
  })
  jobs.save(err => {
    if (err) res.send({ msg: 'Cant`t save the Job', error: err })
    res.send({ msg: 'Job saved', data: jobs })
  })
}

const remove = (req, res) => {
  Jobs.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

module.exports = {
  getAll,
  getById,
  insert,
  remove
}
