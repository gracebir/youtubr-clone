import React from 'react'
import styled from 'styled-components'

export type sideButtonProps = {
    title: string;
    Icon: any;
}

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 25px;
    gap: 1.5em;
    &:hover{
      background: #e5e5e5;
      cursor: pointer;
    }
`;

function SidebarButton({
    title,
    Icon
}: sideButtonProps) {
  return (
    <ButtonWrapper>
      <Icon size={25}/>
      <span>{title}</span>
    </ButtonWrapper>
  )
}

export default SidebarButton
