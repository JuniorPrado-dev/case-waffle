import styled, { keyframes } from "styled-components";
import { device } from "../../utils/sizeDevices";
import COLORS from "@/constants/colors";
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -60%);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
    to {
        opacity: 0;
        transform: translate(-50%, -60%);
      }
      `;
export const Container = styled.header`
  width: 100%;
  height:4% ;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color:${COLORS.darkBlue};
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  @media ${device.mobileM} {
    width: 100%;
    padding-top: 1.5vw;
    padding-bottom: 10px;
    background-color: #070d19;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `;

export const Logo = styled.img`
  height: 5vw;
  &:hover{
    cursor: pointer;
  }
  @media ${device.mobileM} {
    width:110px;
    margin:10px 0px;
  }
  
  `;

export const Text = styled.p`
  //background-color: aqua;
  color:${COLORS.yellow};
  font-size:3vw;
  font-weight: 800;
  `;
export const Content = styled.div`
  //background-color: aqua;
  display: flex;
  height: max-content;
  padding:0 10vw ;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileM} {
      flex-direction: column;
  }
`;
export const ContentBox = styled.div`
  cursor: pointer;
  //background-color: aqua;
  height: max-content;
  width: max-content ;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
