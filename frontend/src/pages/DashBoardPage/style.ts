import { device } from '@/utils/sizeDevices';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#0f1119 ;
  width: 100%;
  min-height: 100vh;
    @media ${device.mobileM} {
     
    }
  `;
export const Body = styled.body`
  display: flex;
  background-color:#0f1119 ;
  width: 100%;
  min-height: 100vh;
  `;
interface PropsMenuContainer{
  isVisible: boolean;
}
export const MenuContainer = styled.div<PropsMenuContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color:#0f1119 ;
  width: 20%;
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: #0f1119;
    width: 90%;
    opacity: 0.95;
    height: 100vh;
    z-index: 10;
    position: fixed;
    left: ${({ isVisible }) => (isVisible ? "0" : "-100%")};
    transition: left 0.8s ease-in-out;
  }
  `;


export const Content = styled.div`
  flex: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 70%;
  background-color: #e2e2e2;
  `;