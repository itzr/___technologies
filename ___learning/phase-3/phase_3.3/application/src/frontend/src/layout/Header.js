import {Link} from "react-router-dom";
import React from "react";

const TWITTER_LINK = "https://twitter.com/share?text=NES.css%EF%BD%9CNES-style%20CSS%20Framework%20%40bc_rikko&url=https://nostalgic-css.github.io/NES.css/"
const FACEBOOK_LINK = "https://www.facebook.com/sharer.php?u=https://nostalgic-css.github.io/NES.css/&t=NES.css%EF%BD%9CNES-style%20CSS%20Framework"
const LINKEDIN_LINK = "https://www.linkedin.com/shareArticle?url=https%3A//nostalgic-css.github.io/NES.css/&title=NES.css%EF%BD%9CNES-style%20CSS%20Framework"
const GITHUB_LINK = "https://github.com/nostalgic-css/NES.css"

const Header = () => {
    return (
        <header
            // className={"sticky"}
            // style={{ sticky: 'scrollPos > 50' }}
        >
            <div className={"container"}>
                <div className={"nav-brand"}>
                    <Link to={"/"}>
                        <h1><i className={"nes-icon star is-large is-half brand-logo"} style={{marginRight: '70px'}}> </i>DeGov Advisory</h1>
                    </Link>
                    <p>Decentralised Governance FTW</p>
                </div>

                <div className={"social-buttons"}>
                    <p>Share on SNS</p>
                    <div className={"share"}>
                        <a href={TWITTER_LINK} target={"_blank"} rel={"noopener noreferrer"}>
                            <i className={"nes-icon twitter"}></i>
                        </a>
                        <a href={FACEBOOK_LINK} target={"_blank"} rel={"noopener noreferrer"}>
                            <i className={"nes-icon facebook"}></i>
                        </a>
                        <a href={LINKEDIN_LINK} target={"_blank"} rel={"noopener noreferrer"}>
                            <i className={"nes-icon linkedin"}></i>
                        </a>
                        <a href={GITHUB_LINK}  target={"_blank"} rel={"noopener noreferrer"}>
                            <i className={"nes-icon github"}></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
