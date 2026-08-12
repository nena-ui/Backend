import mongoose from 'mongoose';
const { Schema } = mongoose;

const expensesSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    description : String,
    status : String
}
,{
    timestamps : true
});

const Expenses = mongoose.model('Expenses', expensesSchema);

export default Expenses 
