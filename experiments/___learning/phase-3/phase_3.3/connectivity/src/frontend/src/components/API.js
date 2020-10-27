import React, { useEffect, useState } from 'react';
import Axios from 'axios'

// const ONE ='/backend'
// const TWO ='backend'
// const THREE ='/backend:77'
// const FOUR ='backend:77'
// const EXTERNAL_BACKEND_URL='http://localhost:78'
const ONE_1 ='http://backend:2222'
// const TWO_1 ='http://backend.application'
// const THREE_1 ='http://backend:77'
// const FOUR_1 ='http://backend.application:77'

const API = () => {
    const [internalResponse, setInternalResponse] = useState('internal pending')

    useEffect(() => {
           [ONE_1].forEach(url => {
            Axios.get('', {url: url}).then((res) => {
                const response = res.data;
                if (response) {
                    console.log(url, response)
                    setInternalResponse(response)
                }
            }).catch((e) => {
                console.log(e);
            });
        })
    }, [])

    return (
        <React.Fragment>
            <div>WAZZUP</div>
            <div>INTERNAL: {internalResponse}</div>
        </React.Fragment>
        )
}

export default API;
