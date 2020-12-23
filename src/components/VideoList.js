import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedVideoList = videos.map(v => {
    return (
      <VideoItem key={v.id.videoId} video={v} />
    )
  });


  return (
    <div className="ui relaxed divided list">
      {renderedVideoList}
    </div>
  )
};

export default VideoList;