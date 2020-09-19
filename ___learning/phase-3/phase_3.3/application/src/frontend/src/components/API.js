import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const BACKEND_URL='http://0.0.0.0:77'

// https://stackoverflow.com/questions/53577406/how-do-i-fix-a-network-error-received-from-axios-response-reactjs

const API = () => {
    const [response, setResponse] = useState('pending')

    useEffect(() => {
        Axios.get('', {baseURL: BACKEND_URL}).then((res) => {
            const response = res.data;
            if (response) {
                console.log('WOO', response)
                setResponse(response)
            }
        }).catch((e) => {
            console.log(e);
        });
    }, [])

    return (
        <React.Fragment>
            <div>WAZZUP</div>
            <div>{response}</div>
            {/*<section className={"topic"}>*/}
            {/*    <h2 id={"about"}><a href={"#about"}>#</a>About</h2>*/}
            {/*    <p>DeGov Advisory monitors and provides research on governance matters in the Blockchain world.</p>*/}
            {/*</section>*/}
            {/*<section className={"topic"}>*/}
            {/*    <h2 id={"api"}><a href={"#api"}>#</a>API</h2>*/}
            {/*    <p>Coming Now.</p>*/}
            {/*    <API />*/}
            {/*</section>*/}
        </React.Fragment>
        )
}

export default API;
