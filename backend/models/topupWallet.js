const mongoose = require('mongoose')
const topupWalletSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
}
, { timestamps: true })
module.exports = mongoose.model('TopupWallet', topupWalletSchema)