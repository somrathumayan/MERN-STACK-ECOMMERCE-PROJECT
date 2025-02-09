const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name: {
        type: String,
        required: [true , "User name is required"],
        trim: true,
        minlength: [3, "min length 3 characters"],
        maxlength: [31, "max length 31 characters"]
    },
    email: {
        type: String,
        required: [true , "User name is required"],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: `enter a valid email address!`
        }
    },

    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `Password is too weak! It must be at least 8 characters long, with uppercase, lowercase, number, and special character.`
        },
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10));
    },
    image: {
        type: String,
    },
    address: {
        type: String,
        required: [true , "Address is required"],
    },
    phone: {
        type: String,
        required: [true , "Address is required"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    }
})