import React, { useEffect, useState } from 'react';
import Axios from 'axios'

// 77 Cluster IP port
// 78 Load Balancer port
const ONE ='/backend'
const TWO ='backend'
const THREE ='/backend:77'
const FOUR ='backend:77'
const EXTERNAL_BACKEND_URL='http://localhost:78'
const ONE_1 ='http://backend'
// const TWO_1 ='http://backend.application'
// const THREE_1 ='http://backend:77'
// const FOUR_1 ='http://backend.application:77'

// const KLUSTER_BACKEND_URL='http://backend.application.svc.cluster.local:77'
// https://stackoverflow.com/questions/53577406/how-do-i-fix-a-network-error-received-from-axios-response-reactjs
// use KONG or ISTIO (KONG seems easier to maintain)
// Guides
// Kong: https://medium.com/@far3ns/kong-the-microservice-api-gateway-526c4ca0cfa6
// Istio: https://istio.io/latest/docs/examples/microservices-istio/single/
// NOTE
// All traffic is currently intercepted by Istio.
// It makes sense to understand this software in more depth: https://istio.io/latest/docs/concepts/what-is-istio/
// In particular TRAFFIC MANAGEMENT: https://istio.io/latest/docs/concepts/traffic-management/
const API = () => {
    const [externalResponse, setResponse] = useState('external pending')
    const [internalResponse, setInternalResponse] = useState('internal pending')

    useEffect(() => {
            [EXTERNAL_BACKEND_URL].forEach(url => {
            Axios.get('', {baseURL: url}).then((res) => {
                const response = res.data;
                if (response) {
                    setResponse(response)
                }
            }).catch((e) => {
                console.log(e);
            });
        })
    }, [])

    // For this use INGRESS.
    // useEffect(() => {
    //     // [ONE_1, TWO_1, THREE_1, FOUR_1].forEach(url => {
    //         [ONE_1].forEach(url => {
    //         // console.log("RESULTS FOR: ", url)
    //         Axios.get('', {url: url}).then((res) => {
    //             const response = res.data;
    //             if (response) {
    //                 console.log(url, response)
    //                 setInternalResponse(response)
    //             }
    //         }).catch((e) => {
    //             console.log(e);
    //         });
    //     })
    // }, [])


    return (
        <React.Fragment>
            <div>WAZZUP</div>
            <div>EXTERNAL: {externalResponse}</div>
            {/*<div>INTERNAL: {internalResponse}</div>*/}
            {/*<section className={"topic"}>*/}
            {/*    <h2 id={"about"}><a href={"#about"}>#</a>About</h2>*/}
            {/*    <p>DeGov Advisory monitors and provides research on governance matters in the Blockchain world.</p>*/}
            {/*</section>*/}
            {/*<section className={"topic"}>*/}
            {/*    <h2 id={"api"}><a href={"#api"}>#</a>API</h2>*/}
            {/*    <p>Coming Now.</p>*/}
            {/*</section>*/}
        </React.Fragment>
        )
}

export default API;
