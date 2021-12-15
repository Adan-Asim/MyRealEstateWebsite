const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        username: {type: String, required: true, unique: true, minlength: 1},
        password: {type: String, required:true, minlength:1 },
    },
    {
        timestamps: true,
    }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;