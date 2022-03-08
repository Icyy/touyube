import React from "react";
import VideoItem from "./VideoItem";
class VideoList extends React.Component{

    render(){
        return(
            <div>
               {this.props.videos.map((video)=>{
                   return(
                       <div>
                           <VideoItem title={video.snippet.title} tn={video.snippet.thumbnails.default.url} />
                       </div>
                   );
               })}
            </div>
        );
    }

}


export default VideoList;