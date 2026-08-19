import Todo from "../Schema/Todo.js";


// Create
export const createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);
        res.json(newTodo);
    } 
    catch(err) {
       return res.status(500).json({ message: error.message })
    }
}


//get
export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({
            message: error.message
        })
    }
}


// Update
export const updateTodo = async (req, res) => {
    try {
        const { title, description, isCompleted } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                isCompleted
            },
            {
                new: true,
            }
        )

        if (!todo) {
            return res.status(404).json({message: "Todo not found"})
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}


// delete
export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({message:"Todo not found"})
        }
        res.status(200).json({message: "Todo deleted successfully"})

    } catch (error) {

        res.status(500).json({message:err.message})
    }
}


