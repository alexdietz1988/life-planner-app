import { type Area, type Priority, type Status } from '../../types';
import GetPriorityIcon from '../../GetPriorityIcon';
import { getStatusLabel } from '../../utils';
import * as Styled from './EditAreaForm.styles';
import { FaCheck } from 'react-icons/fa';

interface EditAreaFormProps {
  area: Area;
  setLifeAreas: React.Dispatch<React.SetStateAction<Area[]>>;
  setSelectedArea: React.Dispatch<React.SetStateAction<Area | null>>;
}

const EditAreaForm = ({
  area,
  setLifeAreas,
  setSelectedArea,
}: EditAreaFormProps) => {
  const priorityOptions: Priority[] = ['high', 'medium', 'low'];
  const editButton = (
    buttonType: 'priority' | 'status',
    priority: Priority,
    status: Status
  ) => {
    const updatedArea = {
      ...area,
      status,
      priority,
    };
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          setLifeAreas((prev) => {
            const otherAreas = prev.filter((a) => a.id !== area.id);
            return [...otherAreas, updatedArea];
          });
        }}
      >
        {buttonType === 'priority' ? (
          <GetPriorityIcon priority={priority} />
        ) : (
          getStatusLabel(status)
        )}
      </button>
    );
  };
  const statusOptions: Status[] = ['good', 'neutral', 'bad'];
  const handleDelete = () => {
    setLifeAreas((prev) => prev.filter((a) => a.id !== area.id));
    setSelectedArea(null);
  };
  return (
    <Styled.Container>
      <h2>{area.name}</h2>
      <Styled.Field>
        <div>Priority</div>
        <Styled.Buttons>
          {priorityOptions.map((priority) =>
            editButton('priority', priority, area.status)
          )}
        </Styled.Buttons>
      </Styled.Field>
      <Styled.Field>
        <div>Status</div>
        <Styled.Buttons>
          {statusOptions.map((status) =>
            editButton('status', area.priority, status)
          )}
        </Styled.Buttons>
      </Styled.Field>
      <button onClick={handleDelete}>Delete Area</button>
      <Styled.CloseButton onClick={() => setSelectedArea(null)}>
        <FaCheck />
      </Styled.CloseButton>
    </Styled.Container>
  );
};

export default EditAreaForm;
