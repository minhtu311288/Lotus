module.exports = {
    multiMogoToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mogooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}