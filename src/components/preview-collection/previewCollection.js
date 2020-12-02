import * as React from "react";

function Preview({title, content}){
    return(
        <div className="PreviewAll">
            <h2>{title}</h2>
            <div className="Preview">
            {content.map(item =>  <div key={item.key}>{item.name}</div>
            )}
            </div>
        </div>
    )
}
export default Preview;