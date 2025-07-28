import { useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { categories, areas } from './data';
import { getStatusLabel } from './utils';
import { type Area } from './types';
import EditAreaForm from './EditAreaForm/EditAreaForm.component';
import GetPriorityIcon from './GetPriorityIcon';

const App = () => {
  const [lifeAreas, setLifeAreas] = useState(areas);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  return (
    <Styled.Container>
      {categories.map((category) => (
        <Styled.Category key={'category-' + category.id}>
          <Styled.CategoryLabel>{category.name}</Styled.CategoryLabel>
          <Styled.AreasContainer>
            {lifeAreas
              .filter((area) => area.category === category.id)
              .map((area) => (
                <Styled.Area
                  key={'area-' + area.id}
                  onClick={() => setSelectedArea(area)}
                >
                  <div>{area.name}</div>
                  <div>{getStatusLabel(area.status)}</div>
                  <div>{<GetPriorityIcon priority={area.priority} />}</div>
                </Styled.Area>
              ))}
          </Styled.AreasContainer>
        </Styled.Category>
      ))}
      {selectedArea && (
        <EditAreaForm
          area={selectedArea}
          setLifeAreas={setLifeAreas}
          setSelectedArea={setSelectedArea}
        />
      )}
    </Styled.Container>
  );
};

export default App;
