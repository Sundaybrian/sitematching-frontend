import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

/***
 *
 */

function MarkerIcon(props) {
    return (
        <div className="pin">
            <Icon
                icon={locationIcon}
                className="pin-icon"
                width={25}
                height={41}
                color="green"
            />
            {/* <p className="pin-text">{text}</p> */}
        </div>
    );
}

export default MarkerIcon;
