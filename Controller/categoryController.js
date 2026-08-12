import Category from "../Schema/category.js"

//export
export const createCategory = async(req, res) => {
try{
  const newCategory = await Category.create(req.body)  //create
  res.json(newCategory)
  }
  catch(err) {
  return res.status(500).json ({
    message : err.message
  })
}
}


export const getCategory = async(req, res) =>{
try{
  const allCategory= await Category.find()     //find
  res.status(200).json(allCategory)
}
catch(err) {
  return res.status(500).json ({
    message : err.message
  })
}
}
