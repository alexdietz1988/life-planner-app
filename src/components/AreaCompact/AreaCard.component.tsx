import * as Styled from './AreaCard.styles';
import { type Status, type Priority, type Area } from '../../types';
import GetPriorityIcon from '../GetIndicatorIcons/GetPriorityIcon';
import GetStatusIcon from '../GetIndicatorIcons/GetStatusIcon';
import { CiCircleMinus } from 'react-icons/ci';
import { BsFillPinFill } from 'react-icons/bs';

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
      const newAreas: Area[] = [];
      for (const a of prev) {
        if (a.id === area.id) {
          newAreas.push({ ...a, status: getNewStatus(a.status) });
        } else {
          newAreas.push(a);
        }
      }
      return newAreas;
    });
  };

  const handleTogglePriority = (area: Area) => {
    setLifeAreas((prev) => {
      const newAreas: Area[] = [];
      for (const a of prev) {
        if (a.id === area.id) {
          newAreas.push({ ...a, priority: getNewPriority(a.priority) });
        } else {
          newAreas.push(a);
        }
      }
      return newAreas;
    });
  };

  const handleTogglePinned = () => {
    setLifeAreas((prev) => {
      const newAreas: Area[] = [];
      for (const a of prev) {
        if (a.id === area.id) {
          newAreas.push({ ...a, pinned: !a.pinned });
        } else {
          newAreas.push(a);
        }
      }
      return newAreas;
    });
  };

  const handleDelete = () => {
    setLifeAreas((prev) => prev.filter((a) => a.id !== area.id));
  };

  return (
    <Styled.Area key={'area-' + area.id}>
      <Styled.DeleteButton onClick={handleDelete}>
        <CiCircleMinus />
      </Styled.DeleteButton>
      <Styled.Pin pinned={area.pinned}>
        <button onClick={handleTogglePinned}>
          <BsFillPinFill />
        </button>
      </Styled.Pin>
      <Styled.AreaLabel alwaysShow={!area.image}>{area.name}</Styled.AreaLabel>
      {area.image && <Styled.AreaImage src={area.image} alt={area.name} />}
      <Styled.Indicators>
        <button onClick={() => handleToggleStatus(area)}>
          <GetStatusIcon status={area.status} />
        </button>
        <button onClick={() => handleTogglePriority(area)}>
          {<GetPriorityIcon priority={area.priority} />}
        </button>
      </Styled.Indicators>
    </Styled.Area>
  );
};

export default AreaCard;
