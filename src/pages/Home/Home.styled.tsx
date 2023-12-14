import styled from 'styled-components'

export const LimiterConatiner = styled.div`    
margin: 0 auto;
    width: 288px;

  @media screen and (min-width: 768px) {
      width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
  }`

export const CategorySection = styled.section`
margin-top:88px;
padding: 88px 0;
  
ul {display: flex;
  flex-direction:column;
  gap: 72px;};

  li {
    display: flex;
gap: 32px;
  }
  li:nth-child(even) {
  flex-direction: row-reverse;
}
`