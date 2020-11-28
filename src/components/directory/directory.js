import React, {Component} from "react";
import MenuItem from "../menu-item/menu-item";
import "../directory/directory.css"

class Directory extends Component{
    constructor(props){
        super(props);
        this.state ={
            content : [
                {
                    id : 1,
                    imageUrl : "https://5.imimg.com/data5/IM/GX/MY-10973479/mens-plain-formal-shirt-500x500.jpg",
                    title : "SHIRT",
                    linkUrl : "shirt"
                }, 
                {
                    id : 2,
                    imageUrl : "https://pbs.twimg.com/media/Dz4F7fdWkAES-JH?format=jpg&name=small",
                    title : "SHOES",
                    linkUrl : "shoes"
                },
                {
                    id : 3,
                    imageUrl : "https://5.imimg.com/data5/CD/CB/MY-48686190/college-bag-500x500.jpg",
                    title : "BAGS",
                    linkUrl : "bags"
                },
                {
                    id : 4,
                    imageUrl : "https://www.dhresource.com/0x0/f2/albu/g4/M01/33/DD/rBVaEVm4o-yAfHqrAAI8R0vSY84784.jpg/2017-2018-cheap-men-suit-groom-tuxedos-groomsmen.jpg",
                    title : "MEN",
                    linkUrl : "men"
                },
                {
                    id : 5,
                    imageUrl : "https://i.pinimg.com/564x/73/43/45/73434555be546294fa6c2deacf5ae582.jpg",
                    title : "WOMEN",
                    linkUrl : "women"
                }
            ]
        }
    }

    render(){
        console.log(MenuItem)
        return(
            <div className="HomePage-content">
                {this.state.content.map((text=><MenuItem title={text.title} imageUrl={text.imageUrl} key={text.id} linkUrl={text.linkUrl}/>))}
           
            </div>
        )
    }
}
export default Directory;