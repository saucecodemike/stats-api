const mongoose = require ('mongoose');

const EthnicHierarchySchema = mongoose.Schema({

    code: {
        type: String
    },
    parentCode:{
        type: String
    },
    ethnicLevel: {
        type: String
    },
    ethnicValue: {
        type: String
    },
    active: {
        type: String
    }
});

module.exports = mongoose.model('EthnicHierarchys', EthnicHierarchySchema);