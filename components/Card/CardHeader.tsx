import {CardHeader, CardHeaderProps, styled} from '@mui/material';
import theme from '../../styles/theme';

interface SonicXCardHeaderProps extends CardHeaderProps {
  color?: string,
}

const SonicXCardHeader = styled(CardHeader)((props: SonicXCardHeaderProps) => {
  const color = props.color ?? 'primary';
  return {
    borderRadius: theme.shape.borderRadius,
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
  }
});

export default SonicXCardHeader;
