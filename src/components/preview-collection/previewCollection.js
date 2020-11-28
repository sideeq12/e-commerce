import * as React from "react";

function Preview({title, items}){
    return(
        <div className="OverAll">
            <h2>{title}</h2>
            <div className="Preview">
            {items.map(item => {
                return(
                    <div>{item.name}</div>
                )
            })}
            </div>
        </div>
    )
}