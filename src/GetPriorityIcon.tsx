import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from 'react-icons/fc';
import { type Priority } from './types';

const GetPriorityIcon = ({ priority }: { priority: Priority }) => {
  switch (priority) {
    case 'high':
      return <FcHighPriority />;
    case 'medium':
      return <FcMediumPriority />;
    case 'low':
      return <FcLowPriority />;
    default:
      return <FcLowPriority />;
  }
};

export default GetPriorityIcon;
