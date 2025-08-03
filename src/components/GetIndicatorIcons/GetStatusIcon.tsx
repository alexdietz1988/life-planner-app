import type { Status } from '../../types';
import * as Styled from './GetStatusIcon.styles';

const GetStatusIcon = ({ status }: { status: Status }) => {
  return <Styled.Icon status={status} />;
};

export default GetStatusIcon;
