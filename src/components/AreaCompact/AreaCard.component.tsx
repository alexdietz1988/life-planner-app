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

  const handleDelete = () => {
    setLifeAreas((prev) => prev.filter((a) => a.id !== area.id));
  };

  return (
    <Styled.Area key={'area-' + area.id}>
      <button onClick={handleDelete}>x</button>
      <div>{area.name}</div>
      <div>
        <button onClick={() => handleToggleStatus(area)}>
          {getStatusLabel(area.status)}
        </button>
        <button onClick={() => handleTogglePriority(area)}>
          {<GetPriorityIcon priority={area.priority} />}
        </button>
      </div>
    </Styled.Area>
  );
};

export default AreaCard;
