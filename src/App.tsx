import { useEffect, useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { defaultCategories, defaultAreas } from './data';
import { getStatusLabel } from './utils';
import { type Area } from './types';
import EditAreaForm from './EditAreaForm/EditAreaForm.component';
import GetPriorityIcon from './GetPriorityIcon';

const App = () => {
  const [lifeAreas, setLifeAreas] = useState(defaultAreas);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  useEffect(() => {
    const storedAreas = localStorage.getItem('lifeAreas');
    if (storedAreas) {
      setLifeAreas(JSON.parse(storedAreas));
    }
  }, []);

  useEffect(() => {
    if (lifeAreas !== defaultAreas) {
      localStorage.setItem('lifeAreas', JSON.stringify(lifeAreas));
    }
  }, [lifeAreas]);

  return (
    <Styled.Container>
      {defaultCategories.map((category) => (
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
