import type { NextPage } from 'next';
import styled from 'styled-components';
import NavBar from '../components/header/NavBar';
import Siderbar from '../components/sidebar'
import Video from '../components/videos';

const MainContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <MainContainer>
        <Siderbar/>
        <Video/>
      </MainContainer>
    </div>
  )
}

export default Home
