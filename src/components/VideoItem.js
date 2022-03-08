import React from "react";

class VideoItem extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.tn}/>
                {this.props.title}
            </div>
        );
    }
}

export default VideoItem;