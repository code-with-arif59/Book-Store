import mongoose from "mongoose";
const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide a title"],
      trim: true,
      maxLength: [100, "title cannot exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "please provide a author name "],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "please provide a publication year"],
      min: [1000, "publication date cannot be less than 1000"],
      max: [
        new Date().getFullYear(),
        "publication date cannot exceed current year",
      ],
    },
  },
  { timestamps: true },
);


export default mongoose.model("Book", BookSchema);

// ! timestamps Ye Mongoose ko bolta hai ki 2 extra fields automatically add karo:
//! 👉 createdAt → kab data create hua
//!  👉 updatedAt → kab last update hua