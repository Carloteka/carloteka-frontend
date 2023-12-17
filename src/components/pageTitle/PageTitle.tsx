import { Wrapper, Title } from './PageTitle.styled';

export const PageTitle = ({ children }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};
