const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contact_number: {
        type: Number,
        required: true
    },

    id_number: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);