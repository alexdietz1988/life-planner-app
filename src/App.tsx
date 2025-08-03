import { useEffect, useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { defaultCategories, defaultAreas } from './data';
import NewArea from './components/NewArea/NewArea.component';
import AreaCompact from './components/AreaCompact/AreaCard.component';
import { FaPlus } from 'react-icons/fa6';
import Filters from './components/FilterList/FilterList.component.tsx';
import { defaultFilters } from './utils';


const App = () => {
  const [lifeAreas, setLifeAreas] = useState(defaultAreas);
  const [addAreaInCategory, setAddAreaInCategory] = useState<number | null>(
    null
  );
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const storedAreas = localStorage.getItem('lifeAreas');
    console.log(storedAreas);
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
      <Filters filters={filters} setFilters={setFilters} />
      {defaultCategories.map((category) => (
        <Styled.Category key={'category-' + category.id}>
          <Styled.CategoryLabel>{category.name}</Styled.CategoryLabel>
          <Styled.AreasContainer>
            {lifeAreas
              .filter(
                (area) =>
                  area.category === category.id &&
                  (filters.priority === 'all' ||
                    area.priority === filters.priority) &&
                  (filters.status === 'all' || area.status === filters.status)
              )
              .map((area) => (
                <AreaCompact
                  key={'area-' + area.id}
                  area={area}
                  setLifeAreas={setLifeAreas}
                />
              ))}
            {addAreaInCategory === category.id && (
              <NewArea
                categoryId={addAreaInCategory}
                setLifeAreas={setLifeAreas}
                setAddAreaInCategory={setAddAreaInCategory}
              />
            )}
            <Styled.AddAreaButton
              onClick={() => setAddAreaInCategory(category.id)}
            >
              <FaPlus />
            </Styled.AddAreaButton>
          </Styled.AreasContainer>
        </Styled.Category>
      ))}
    </Styled.Container>
  );
};

export default App;
