import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedVideoList = videos.map(v => {
    return (
      <div key={v.id.videoId}>
        <VideoItem video={v} />
      </div>
    )
  });


  return (
    <div>
      {renderedVideoList}
    </div>
  )
};

export default VideoList;