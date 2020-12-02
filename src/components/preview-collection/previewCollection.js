import * as React from "react";
import Inner from "../preview-collection/InnerCollection"

function Preview({title, content}){
    return(
        <div className="PreviewAll">
            <h2>{title}</h2>
            <div className="Preview">
            {content.map((text) =>  <Inner key={text.id} name={text.name} imageUrl={text.imageUrl}  />
            )}
            </div>
        </div>
    )
}
export default Preview;