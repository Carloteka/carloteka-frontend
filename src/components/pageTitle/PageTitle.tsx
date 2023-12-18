import { Wrapper, Title } from './PageTitle.styled';

interface PageTitleProps {
  children?: React.ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};
