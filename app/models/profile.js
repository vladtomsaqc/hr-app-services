const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minLength: 2, maxLength: 100,},
    lastName: { type: String, required: true, minLength: 2, maxLength: 100,},
    summary: { type: String, minLength: 2, maxLength: 500,},
    contactInfo: {
        address: { type: String, required: true, minLength: 2, maxLength: 100,},
        phoneNumber: { type: String, required: true, minLength: 2, maxLength: 100,},
        email: { type: String, required: true, minLength: 2, maxLength: 30, },
    },
    education: [{
        institution: { type: String, required: true, minLength: 2, maxLength: 100,},
        address: { type: String, required: true, minLength: 2, maxLength: 100,},
        degree: { type: String, required: true, minLength: 2, maxLength: 100,},
        summary: { type: String, minLength: 2, maxLength: 500,},
        startDate: { type: Date },
        endDate: { type: Date },
    }],
    workExperience: [{
        organization: { type: String, required: true, minLength: 2, maxLength: 100,},
        position: { type: String, required: true, minLength: 2, maxLength: 100,},
        summary: { type: String, minLength: 2, maxLength: 500,},
        startDate: { type: Date },
        endDate: { type: Date },
    }],
    skills: [{
        name: { type: String, required: true, minLength: 2, maxLength: 100,},
        level: { type: Number, required: true,},
    }],
    languages: [{
        name: { type: String, required: true, minLength: 2, maxLength: 100,},
        level: { type: String, required: true,},
    }],
    courses: [{
        name: { type: String, required: true, minLength: 2, maxLength: 100,},
        url: { type: String, required: true,},
        issuedAt: { type: Date },
    }],
    portfolio: [{
        name: { type: String, required: true, minLength: 2, maxLength: 100,},
        url: { type: String, required: true,},
    }],
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
