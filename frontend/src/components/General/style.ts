import COLORS from '@/constants/colors';
import FONTS, { SIZES } from '@/constants/fonts';
import { device } from '@/utils/sizeDevices';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e2e2e2;
  width:100% ;
  height:auto;
  @media ${device.mobileM} {
  
  }
  `;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  `;

export const Tittle = styled.h1`
  color: ${COLORS.black};
  font-family: ${FONTS.montSerrat};
  font-size: ${SIZES.label};
  opacity: 0.6;
  padding: 10px 20px;
  `;

export const Description = styled.p`
  color: ${COLORS.darkGrey};
  font-family: ${FONTS.montSerrat};
  font-size: ${SIZES.label};
  padding: 0px 0px 20px 20px;
  `;

export const WalletCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  
  `;

export const ChartCardContainer = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  align-items: center;
  justify-content: center;
  place-items: center;
  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
    
  }
  `;
