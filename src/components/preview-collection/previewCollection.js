import * as React from "react";

function Preview({title, content}){
    return(
        <div className="OverAll">
            <h2>{title}</h2>
            <div className="Preview">
            {content.map(item => {
                return(
                    <div key={item.key}>{item.name}</div>
                )
            })}
            </div>
        </div>
    )
}
export default Preview;