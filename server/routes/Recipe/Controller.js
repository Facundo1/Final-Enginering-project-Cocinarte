const Recipe = require('../../models/Recipe')

const getAll = (req, res) => {
  Recipe.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the user list', error: err })
    res.send(products)
  })
}

const getById = (req, res) => {
  Recipe.findById(req.params.id, (err, recipes) => {
    if (err)
      res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
    res.send(recipes)
  })
}
const insert = (req, res) => {
  const recipe = new Recipe({
    photo: req.body.photo,
    title: req.body.title,
    description: req.body.description,
    Steps: req.body.Steps,
    Ingredients: req.body.Ingredients,
    Category: req.body.Category
  })
  recipe.save(err => {
    if (err) res.send({ msg: 'Cant`t save the Recipe', error: err })
    res.send({ msg: 'Recipe saved', data: recipe })
  })
}

const remove = (req, res) => {
  Recipe.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
