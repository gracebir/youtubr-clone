import React from 'react'
import styled from 'styled-components'
import SidebarButton from './SidebarButton';
import { sidebarData } from './dummyData';

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

function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarCategory>
          {sidebarData.splice(0,3)
          .map((data, i:number)=>(
              <SidebarButton 
              key={i} 
              label={data.title} 
              Icon={data.Icon}/>
          ))}
      </SidebarCategory>
      <hr />
      <SidebarCategory>
      {sidebarData.splice(4,sidebarData.length)
      .map((data, i:number)=>(
              <SidebarButton 
              key={i} 
              label={data.title} 
              Icon={data.Icon}/>
          ))}
      </SidebarCategory>
    </SidebarWrapper>
  )
}

export default Sidebar
