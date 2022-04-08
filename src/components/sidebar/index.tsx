import React from 'react'
import styled from 'styled-components'
import SidebarButton, { sideButtonProps } from './SidebarButton';
import {
  MdHomeFilled, 
  MdOutlineExplore,
  MdOutlineVideoLibrary, 
  MdOutlineSubscriptions
} from 'react-icons/md'
import {GrHistory} from 'react-icons/gr'
import {BsClockHistory} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'

const SidebarWrapper = styled.div`
    height: 100%;
    width: 230px;
    background-color: #fff;
    overflow-y: scroll;
`;

const SidebarCategory = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

const Hr = styled.hr`
  height: 1px;
  background-color: #e5e5e5;
  border: none;
`

function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarCategory>
      <SidebarButton 
      title='Home'
      Icon={MdHomeFilled}
      />
      <SidebarButton 
      title='Explore'
      Icon={MdOutlineExplore}
      />
      <SidebarButton 
      title='Subscription'
      Icon={MdOutlineSubscriptions}
      />
      </SidebarCategory>
      <Hr/>
      <SidebarCategory>
      <SidebarButton 
      title='Library'
      Icon={MdOutlineVideoLibrary}
      />
      <SidebarButton 
      title='History'
      Icon={GrHistory}
      />
      <SidebarButton 
      title='Watch Later'
      Icon={BsClockHistory}
      />
      <SidebarButton 
      title='Liked Videos'
      Icon={AiOutlineLike}
      />
      <SidebarButton 
      title='Home'
      Icon={MdHomeFilled}
      />
      
      </SidebarCategory>
    </SidebarWrapper>
  )
}

export default Sidebar
