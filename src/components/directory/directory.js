import React, {Component} from "react";
import MenuItem from "../menu-item/menu-item";
import "../directory/directory.css"

class Directory extends Component{
    constructor(){
        super();
        this.state ={
            content : [
                {
                    id : 1,
                    imageUrl : "https://5.imimg.com/data5/IM/GX/MY-10973479/mens-plain-formal-shirt-500x500.jpg",
                    title : "SHIRT",
                }, 
                {
                    id : 2,
                    imageUrl : "https://pbs.twimg.com/media/Dz4F7fdWkAES-JH?format=jpg&name=small",
                    title : "SHOES",
                },
                {
                    id : 3,
                    imageUrl : "https://5.imimg.com/data5/CD/CB/MY-48686190/college-bag-500x500.jpg",
                    title : "BAGS",
                },
                {
                    id : 4,
                    imageUrl : "https://www.dhresource.com/0x0/f2/albu/g4/M01/33/DD/rBVaEVm4o-yAfHqrAAI8R0vSY84784.jpg/2017-2018-cheap-men-suit-groom-tuxedos-groomsmen.jpg",
                    title : "MEN",
                },
                {
                    id : 5,
                    imageUrl : "https://www.thetrendspotter.net/wp-content/uploads/2019/09/Casual-Outfits.jpg",
                    title : "WOMEN",
                }
            ]
        }
    }

    render(){
        return(
            <div className="HomePage-content">
            {this.state.content.map(({title, imageUrl, id}) =>{
                <MenuItem title={title} key={id} imageUrl={imageUrl}/>
            })}
            </div>
        )
    }
}
export default Directory;