const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const RABBIT_MQ_CLUSTER_IP = process.env.RABBIT_MQ_CLUSTER_IP ? process.env.RABBIT_MQ_CLUSTER_IP : 'RABBIT_CLUSTER_IP_NOT_FOUND'

module.exports = {
    RABBIT_MQ_CLUSTER_IP
}

