// @mui
import { StyledRoot, StyledSection } from './styles';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
    <StyledRoot>
      <StyledSection>{children}</StyledSection>
    </StyledRoot>
  );
}
