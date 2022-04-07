import React from 'react'
import styled from 'styled-components'
import VideoCard from './VideoCard'

const VideoWrapper = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    height: 100%;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    overflow-y: scroll;
`
const VideosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
    color: #030303;
`

function Video() {
  return (
    <VideoWrapper>
      <Title>
        Recommanded
      </Title>
      <VideosContainer>
        <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
         <VideoCard
        thumdnailUrl='https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jp'
        channelImg='http://aninex.com/images/srvc/web_de_icon.png'
        videoTitle=' Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn'
        viewsInfo='10M Views • 3 Months Ago'
        channelName='FutureCoders'
        />
      </VideosContainer>
    </VideoWrapper>
  )
}

export default Video
