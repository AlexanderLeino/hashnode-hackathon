const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema (
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String
        },
        email: {
            type:String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        aboutMe: {
            type: String,
        },

        GithubLink: {
            type: String 
        },

        TwitterLink: {
            type: String
        },

        hashNodeLink: {
            type: String
        },

        linkedinLink: {
            type: String
        },
        
        affiliatedGroups: [{
            type: Schema.Types.ObjectId,
            ref: 'Group'
        }],

        isAdmin: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        },
        skills: [{
            type: Schema.Types.ObjectId,
            ref: 'SkillSet'
        }]


    },
)

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
  })
  
  
  const User = model('User', userSchema);
  
  module.exports = User;
