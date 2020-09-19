import React from 'react';

import {
    Link
} from "react-router-dom";

import basicData from "./../mockData/researchDescription.js"

const Home = () => {
    return (
                <React.Fragment>
                    <section className={"topic"}>
                        <h2 id={"about"}><a href={"#about"}>#</a>About</h2>
                        <p>DeGov Advisory monitors and provides research on governance matters in the Blockchain world.</p>
                    </section>
                    <section className={"topic"}>
                        <h2 id={"api"}><a href={"#api"}>#</a>API</h2>
                        <p>Coming Soon.</p>
                    </section>
                    <section className={"topic"}>
                        <h2 id={"research"}><a href={"#research"}>#</a>Research</h2>
                        <div className="nes-table-responsive">
                            <table className="nes-table is-bordered is-centered">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Protocol</th>
                                    <th>Issue Number</th>
                                    <th>Detail</th>
                                </tr>
                                </thead>
                                <tbody>
                                { basicData.map(info => {
                                    return (
                                        <tr>
                                            <td>
                                                <Link to={`/${info.protocol}-${info.number}`}>
                                                    {info.date}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/${info.protocol}-${info.number}`}>
                                                    {info.protocol}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/${info.protocol}-${info.number}`}>
                                                    {info.number}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/${info.protocol}-${info.number}`}>
                                                    {info.detail}
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td>Thou hast had a good morning</td>
                                    <td>Thou hast had a good afternoon</td>
                                    <td>Thou hast had a good evening</td>
                                    <td>Thou hast had a good night</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </React.Fragment>
    )
}

export default Home;
