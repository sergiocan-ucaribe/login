const bcrypt = require('bcrypt');
const SaltRounds = 10;

TaskSchema.pre('save', function(next){
    bcrypt.genSalt(SaltRounds).then(salts =>{
        bcrypt.hash(this.password, salts),then(hash =>{
            this.password=hash;
            next();
        }).catch(err => next(err));
    }).catch(err => next(err));
});

TaskSchema.methods.PasswordCompare = function(password, callback){
    bcrypt.compare(password, this.password,(err, Coinciden) => {
        if (err){
            return callback(err);
        }
        callback(null, Coinciden)
    } )
}

module.export = Encrypt-decrypt;