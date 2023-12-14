import styled from 'styled-components'


export const SliderContainer = styled.div`
position: relative;
   button {
     position: absolute;
     top: 50%;
    transform: translateY(-50%);
    display:flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 32px;
    height: 40px;
    background: #f2f0ec;
    box-shadow: 1px 1px 7px 0px #DAD4C870;
  }
  
  img {
    object-fit: cover;
  }
  .btn_left {   
    left: 16px;    
  }
  .btn_right {    
    right: 16px;
  }
`
export const ChevronIcon = styled.svg`
fill:#101010;
${({ left }) => left ? `` : `transform: rotate(180deg)`}} 
`