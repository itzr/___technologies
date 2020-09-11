const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const RABBIT_MQ_CLUSTER_IP = process.env.RABBIT_MQ_CLUSTER_IP ? `${process.env.RABBIT_MQ_CLUSTER_IP}` : 'RABBIT_CLUSTER_IP_NOT_FOUND'
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID ? process.env.INFURA_PROJECT_ID : 'INFURA_PROJECT_ID_NOT_FOUND'

module.exports = {
    RABBIT_MQ_CLUSTER_IP,
    INFURA_PROJECT_ID
}

