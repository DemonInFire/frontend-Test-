import React from "react";

const Status = props => (
    <div className="infoWeath">
        {props.success &&
        <div>
            <p className="error">{props.success}</p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>
)

export default Status;