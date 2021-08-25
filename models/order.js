import mongoose, {Schema} from 'mongoose'

const schema = new Schema({
  customer:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  }
}, {
  timestamps:true
}) 

const Order = mongoose.model('order', schema)

export default Order;