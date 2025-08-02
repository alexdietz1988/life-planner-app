import * as Styled from './AreaCard.styles';
import { type Status, type Priority, type Area } from '../../types';
import { getStatusLabel } from '../../utils';
import GetPriorityIcon from '../../GetPriorityIcon';

const getNewStatus = (currentStatus: Status) => {
  switch (currentStatus) {
    case 'good':
      return 'neutral';
    case 'neutral':
      return 'bad';
    case 'bad':
      return 'good';
  }
};

const getNewPriority = (currentPriority: Priority) => {
  switch (currentPriority) {
    case 'high':
      return 'medium';
    case 'medium':
      return 'low';
    case 'low':
      return 'high';
  }
};

interface AreaCardProps {
  area: Area;
  setLifeAreas: React.Dispatch<React.SetStateAction<Area[]>>;
}

const AreaCard = ({ area, setLifeAreas }: AreaCardProps) => {
  const handleToggleStatus = (area: Area) => {
    setLifeAreas((prev) => {
      const otherAreas = prev.filter((a) => a.id !== area.id);
      return [...otherAreas, { ...area, status: getNewStatus(area.status) }];
    });
  };

  const handleTogglePriority = (area: Area) => {
    setLifeAreas((prev) => {
      const otherAreas = prev.filter((a) => a.id !== area.id);
      return [
        ...otherAreas,
        { ...area, priority: getNewPriority(area.priority) },
      ];
    });
  };
  return (
    <Styled.Area key={'area-' + area.id}>
      <div>{area.name}</div>
      <div>
        <div onClick={() => handleToggleStatus(area)}>
          {getStatusLabel(area.status)}
        </div>
        <div onClick={() => handleTogglePriority(area)}>
          {<GetPriorityIcon priority={area.priority} />}
        </div>
      </div>
    </Styled.Area>
  );
};

export default AreaCard;
