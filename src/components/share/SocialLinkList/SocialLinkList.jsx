import React from "react";
import { socialData } from "data";
import SocialLinkItem from "components/share/SocialLinkItem";

const SocialLinkList = () => {
    return (<ul>
        {socialData.map(({id,socialName,path}) => {
            return (
                <SocialLinkItem
                key={id}
                socialName={socialName}
                path={path}
                />)
        })}
    </ul>)
}

export default SocialLinkList;