import React from 'react';

const Article = ({article}) => {
    const basic = Object.entries(Object.values(article)[0]['basic'])
    const summary = Object.values(article)[0]['summary']
    const articleText = Object.values(article)[0]['article']
    const proposedSolutions = Object.entries(Object.values(article)[0]['proposedSolutions'])
    const definitions = Object.entries(Object.values(article)[0]['definitions'])
    const userCommentary = Object.entries(Object.values(article)[0]['userCommentary'])

    return (
        <React.Fragment>
            <section className="showcase">
                <section className="nes-container with-title">
                    <h3 className="title"> Basic </h3>
                    <div id="lists" className="item">
                        <div className="lists">
                            <ul className="nes-list is-disc">
                                {
                                    basic.map(item => {
                                        return (
                                            <li style={{wordWrap: 'break-word'}}>
                                                {item[0]} : {item[1]}
                                            </li>
                                        )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section className="showcase">
                <section className="nes-container with-title">
                    <h3 className="title"> Summary </h3>
                    <div id="lists" className="item">
                        <div className="lists">
                            <ul className="nes-list is-disc">
                                {summary}
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section className="showcase">
                <section className="nes-container with-title">
                    <h3 className="title"> Article </h3>
                    <div className="item">
                            {articleText.hook}
                        <div className="nes-table-responsive">
                            <table className="nes-table is-bordered is-centered">
                                <thead>
                                <tr>
                                    {proposedSolutions.map((item, index) => {
                                        return (<th>Proposed Solution: {index+1}</th>)
                                    })}
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {proposedSolutions.map((item) => {
                                        return (<td>{item[1]}</td>)
                                    })}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                            {articleText.rest}
                    </div>
                </section>
            </section>
            <section className="showcase">
                <section className="nes-container with-title">
                    <h3 className="title"> User Commentary </h3>
                        <div>
                                {
                                    userCommentary.map(item => {
                                        return (
                                            <div className={'item'} style={{wordWrap: 'break-word', marginBottom: '20px'}}>
                                                {item[0]} : {item[1]}
                                            </div>

                                        )
                                    })
                                }
                        </div>
                </section>
            </section>
            <section className="showcase">
                <section className="nes-container with-title">
                    <h3 className="title"> Definitions </h3>
                    <div>
                        {
                            definitions.map(item => {
                                return (
                                    <div className={'item'} style={{wordWrap: 'break-word', marginBottom: '20px'}}>
                                        {item[0]} : {item[1]}
                                    </div>

                                )
                            })
                        }
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Article;
