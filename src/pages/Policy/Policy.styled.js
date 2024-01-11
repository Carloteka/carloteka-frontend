import styled from 'styled-components';

export const PolicyBox = styled.div`
  display: flex;
  gap: 32px;

  & > div:last-child {
    h2 {
      display: none;
    }
  }
`;
export const PrivacyPolicy = styled.div`
  width: 975px;
  height: 1032px;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background: rgba(18 20 23 / 15%);
  }

  &:not(:hover) {
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }

  h4 {
    display: inline;
  }

  ol {
    list-style-position: inside;
  }

  ul > li {
    text-indent: 26px;
  }
`;
