const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {


   
        Title: { type: String, required: true },

        Author: { type: String, required: true },

        Summary: { type: String, requires:true },
    }
);

module.exports = mongoose.model("Book", BookSchema);
