import * as Styled from './AreaCard.styles';
import {
  type Status,
  type Priority,
  type Area,
  type Category,
} from '../../types';
import GetPriorityIcon from '../GetIndicatorIcons/GetPriorityIcon';
import GetStatusIcon from '../GetIndicatorIcons/GetStatusIcon';
import { images } from '../../data';

import { BsFillPinFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';

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

const getImageSrc = (imageName: string) => {
  const image = images.find((img) => img.name === imageName);
  return image ? image.src : '';
};

interface AreaCardProps {
  area: Area;
  setAreas: React.Dispatch<React.SetStateAction<Area[]>>;
  setShowAreaForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFormPresets: React.Dispatch<
    React.SetStateAction<{
      area: Area | null;
      category: Category | null;
    }>
  >;
}

const AreaCard = ({
  area,
  setAreas,
  setShowAreaForm,
  setFormPresets,
}: AreaCardProps) => {
  const handleToggleStatus = (area: Area) => {
    setAreas((prev) => {
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
    setAreas((prev) => {
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
    setAreas((prev) => {
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

  return (
    <Styled.Area key={'area-' + area.id}>
      <Styled.EditButton>
        <button
          onClick={() => {
            setShowAreaForm(true);
            setFormPresets({
              area,
              category: null,
            });
          }}
        >
          <MdEdit />
        </button>
      </Styled.EditButton>
      <Styled.Pin pinned={area.pinned}>
        <button onClick={handleTogglePinned}>
          <BsFillPinFill />
        </button>
      </Styled.Pin>
      <Styled.AreaLabel alwaysShow={!area.image}>{area.name}</Styled.AreaLabel>
      {area.image && (
        <Styled.AreaImage src={getImageSrc(area.image)} alt={area.name} />
      )}
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
