import { useEffect, useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { defaultCategories, defaultAreas } from './data';
import NewArea from './components/NewArea/NewArea.component';
import AreaCompact from './components/AreaCard/AreaCard.component.tsx';
import { FaPlus } from 'react-icons/fa6';
import Filters from './components/FilterList/FilterList.component.tsx';
import { defaultFilters } from './utils';

const App = () => {
  const [areas, setAreas] = useState(defaultAreas);
  const [addAreaInCategory, setAddAreaInCategory] = useState<number | null>(
    null
  );
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const storedAreas = localStorage.getItem('areas');
    if (storedAreas) {
      setAreas(JSON.parse(storedAreas));
    }
  }, []);

  useEffect(() => {
    if (areas !== defaultAreas) {
      localStorage.setItem('areas', JSON.stringify(areas));
    }
  }, [areas]);

  return (
    <Styled.Container>
      <Filters filters={filters} setFilters={setFilters} />
      <Styled.CategoriesContainer>
        {defaultCategories.map((category) => (
          <Styled.Category key={'category-' + category.id}>
            <Styled.CategoryLabel>{category.name}</Styled.CategoryLabel>
            <Styled.AreasContainer>
              {areas
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
                    setAreas={setAreas}
                  />
                ))}
              {addAreaInCategory === category.id && (
                <NewArea
                  categoryId={addAreaInCategory}
                  setAreas={setAreas}
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
      </Styled.CategoriesContainer>
    </Styled.Container>
  );
};

export default App;
