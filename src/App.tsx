import { useEffect, useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { defaultCategories, defaultAreas } from './data';
import NewAreaForm from './components/NewAreaForm/NewAreaForm.component';
import AreaCompact from './components/AreaCompact/AreaCard.component';

const App = () => {
  const [lifeAreas, setLifeAreas] = useState(defaultAreas);
  const [addAreaInCategory, setAddAreaInCategory] = useState<number | null>(
    null
  );

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
                <AreaCompact
                  key={'area-' + area.id}
                  area={area}
                  setLifeAreas={setLifeAreas}
                />
              ))}
            <button onClick={() => setAddAreaInCategory(category.id)}>+</button>
          </Styled.AreasContainer>
        </Styled.Category>
      ))}

      {addAreaInCategory && (
        <NewAreaForm
          categoryId={addAreaInCategory}
          setLifeAreas={setLifeAreas}
        />
      )}
    </Styled.Container>
  );
};

export default App;
