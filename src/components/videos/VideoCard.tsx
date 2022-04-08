import React from 'react'
import styled from 'styled-components'

type videoProps = {
    thumdnailUrl : string
    channelImg : string
    channelName: string
    videoTitle : string
    viewsInfo: string
}

const VideoCardWrapper = styled.div`
    width: 310px;
    margin-bottom: 30px;
`

const VideoThumbnail = styled.div`
    width: 100%;
    height: 170px;
`

const ThumbnailImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const VideoDetail = styled.div`
    display: flex;
    margin-top: 15px;
    gap: .3em;
`

const ChannelImg = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
`

const VideoInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const VideoTitle = styled.h3`
    color: #030303;
    line-height: 18px;
    font-size: 14px;
    margin-bottom: 6px;
`;

const ChannelLink = styled.a`
    text-decoration: none;
    font-size: 14px;
    color: #606060;
`

const Videoview = styled.span`
    font-size: 14px;
    color: #606060;
`

function VideoCard({
    thumdnailUrl,
    channelImg,
    channelName,
    videoTitle,
    viewsInfo
}: videoProps) {
  return (
    <VideoCardWrapper>
      <VideoThumbnail>
          <ThumbnailImg 
          src={thumdnailUrl}/>
      </VideoThumbnail>
      <VideoDetail>
          <div>
              <ChannelImg 
              src={channelImg}/>
          </div>
          <VideoInfo>
              <VideoTitle>{videoTitle}</VideoTitle>
              <ChannelLink>{channelName}</ChannelLink>
              <Videoview>{viewsInfo}</Videoview>
          </VideoInfo>
      </VideoDetail>
    </VideoCardWrapper>
  )
}

export default VideoCard
