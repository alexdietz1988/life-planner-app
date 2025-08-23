import { useEffect, useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { defaultCategories, defaultAreas } from './data';
import AreaForm from './components/AreaForm/AreaForm.component.tsx';
import AreaCard from './components/AreaCard/AreaCard.component.tsx';
import { FaPlus } from 'react-icons/fa6';
import Filters from './components/FilterList/FilterList.component.tsx';
import { defaultFilters } from './utils';
import { type Area, type Category } from './types';

const App = () => {
  const [areas, setAreas] = useState(defaultAreas);
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [areaFormPresets, setAreaFormPresets] = useState({
    area: null as Area | null,
    category: null as Category | null,
  });

  const [showAreaForm, setShowAreaForm] = useState(false);
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
      {showAreaForm && (
        <AreaForm
          areaFormPresets={areaFormPresets}
          categories={categories}
          setAreas={setAreas}
          setShowAreaForm={setShowAreaForm}
        />
      )}
      {!showAreaForm && (
        <>
          <Filters filters={filters} setFilters={setFilters} />
          <Styled.CategoriesContainer>
            {categories.map((category) => (
              <Styled.Category key={'category-' + category.id}>
                <Styled.CategoryLabel>{category.name}</Styled.CategoryLabel>
                <Styled.AreasContainer>
                  {areas
                    .filter(
                      (area) =>
                        area.category === category.id &&
                        (filters.priority === 'all' ||
                          area.priority === filters.priority) &&
                        (filters.status === 'all' ||
                          area.status === filters.status)
                    )
                    .map((area) => (
                      <AreaCard
                        key={'area-' + area.id}
                        area={area}
                        setAreas={setAreas}
                        setShowAreaForm={setShowAreaForm}
                        setAreaFormPresets={setAreaFormPresets}
                      />
                    ))}
                  <Styled.AddAreaButton
                    onClick={() => {
                      setShowAreaForm(true);
                      setAreaFormPresets({
                        area: null,
                        category,
                      });
                    }}
                  >
                    <FaPlus />
                  </Styled.AddAreaButton>
                </Styled.AreasContainer>
              </Styled.Category>
            ))}
          </Styled.CategoriesContainer>
        </>
      )}
    </Styled.Container>
  );
};

export default App;
