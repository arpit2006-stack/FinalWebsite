import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 8,
    },
    role:{
      type:String,
      require:true,
      default:"customer",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
