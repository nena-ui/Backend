import Blog from "../Schema/Blog.js"

//Create
export const createBlog =  async (req, res) => {
try {
    const newBlog = await Blog.create(req.body);
  res.json(newBlog);
}
catch(err) {
  return res.status(500).json ({
    message : err.message
  })
}
}


//Update
export const UpdateBlog = async (req, res) => {
  try{
  const {id} = req.params
  const newValue = req.body
  const newBlog = await Blog.findByIdAndUpdate(id,newValue,{new:true})
  res.json(newBlog);
}
catch(err){
    return res.status(500).json ({
    message : err.message
    })
  }
}

//Get All Blogs
export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category','title'); //'-title'
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}