import { type Priority, type Status } from '../../types';
import GetPriorityIcon from '../GetIndicatorIcons/GetPriorityIcon';
import GetStatusIcon from '../GetIndicatorIcons/GetStatusIcon';
import * as Styled from './FilterList.styles';
import { statusOptions, priorityOptions } from '../../utils';

interface FiltersProps {
  filters: {
    status: string;
    priority: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{ status: string; priority: string }>
  >;
}

const FilterList = ({ filters, setFilters }: FiltersProps) => {
  const filterByPriority = (newPriority: Priority) =>
    filters.priority !== newPriority
      ? setFilters((prev) => ({ ...prev, priority: newPriority }))
      : setFilters((prev) => ({ ...prev, priority: 'all' }));

  const filterByStatus = (newStatus: Status) =>
    filters.status !== newStatus
      ? setFilters((prev) => ({ ...prev, status: newStatus }))
      : setFilters((prev) => ({ ...prev, status: 'all' }));

  return (
    <Styled.Container>
      <Styled.FilterGroup>
        <span>filter by status</span>
        <div>
          {statusOptions.map((status) => (
            <Styled.FilterButton
              key={status}
              onClick={() => filterByStatus(status)}
              selected={filters.status === status}
            >
              <GetStatusIcon status={status} />
            </Styled.FilterButton>
          ))}
        </div>
      </Styled.FilterGroup>
      <Styled.FilterGroup>
        <span>filter by priority</span>
        <div>
          {priorityOptions.map((priority) => (
            <Styled.FilterButton
              key={priority}
              onClick={() => filterByPriority(priority)}
              selected={filters.priority === priority}
            >
              <GetPriorityIcon priority={priority} />
            </Styled.FilterButton>
          ))}
        </div>
      </Styled.FilterGroup>
    </Styled.Container>
  );
};

export default FilterList;
