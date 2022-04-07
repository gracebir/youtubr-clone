import React from 'react'
import styled from 'styled-components'

type sideButtonProps = {
    label: string;
    Icon: any;
}

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 25px;
`;

function SidebarButton({
    label,
    Icon
}: sideButtonProps) {
  return (
    <ButtonWrapper>
      <Icon/>
      <span>{label}</span>
    </ButtonWrapper>
  )
}

export default SidebarButton
