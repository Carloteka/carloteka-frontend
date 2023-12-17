import styled from 'styled-components';

export const Limiter = styled.div`
  margin: 0 auto;
  padding: ${({ paddingTopMob }) => `${paddingTopMob} 0 74px`};
  width: 288px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ paddingTopMob }) => `${paddingTopMob} 0 112px`};
    text-align: start;
    width: 1312px;
  }
`;

export const ContainerLimiter = ({
  paddingTopMob,
  paddingTopDesc,
  children,
}) => {
  return (
    <Limiter paddingTopMob={paddingTopMob} paddingTopDesc={paddingTopDesc}>
      {children}
    </Limiter>
  );
};
