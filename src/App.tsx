import { useEffect, useState } from 'react';
import './App.css';
import * as Styled from './App.styles';
import { defaultCategories, defaultAreas } from './data';
import AreaForm from './components/AreaForm/AreaForm.component.tsx';
import CategoryForm from './components/CategoryForm/CategoryForm.component.tsx';
import AreaCard from './components/AreaCard/AreaCard.component.tsx';
import { FaPlus } from 'react-icons/fa6';
import Filters from './components/FilterList/FilterList.component.tsx';
import { defaultFilters } from './utils';
import { type Area, type Category } from './types';
import { MdEdit } from 'react-icons/md';

const defaultFormPresets = {
  area: null as Area | null,
  category: null as Category | null,
};

const App = () => {
  const [areas, setAreas] = useState(defaultAreas);
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [formPresets, setFormPresets] = useState(defaultFormPresets);

  const [showAreaForm, setShowAreaForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const storedAreas = localStorage.getItem('areas');
    if (storedAreas) {
      setAreas(JSON.parse(storedAreas));
    }
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);

  useEffect(() => {
    setFormPresets(defaultFormPresets);
    if (areas !== defaultAreas) {
      localStorage.setItem('areas', JSON.stringify(areas));
    }
    if (categories !== defaultCategories) {
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [areas, categories]);

  useEffect(() => {
    if (reset) {
      localStorage.removeItem('areas');
      setAreas(defaultAreas);
      setReset(false);
    }
  }, [reset]);

  return (
    <Styled.Container>
      {showAreaForm && (
        <AreaForm
          areaFormPresets={formPresets}
          categories={categories}
          setAreas={setAreas}
          setShowAreaForm={setShowAreaForm}
        />
      )}
      {showCategoryForm && (
        <CategoryForm
          categories={categories}
          presetCategory={formPresets.category || undefined}
          setCategories={setCategories}
          setShowCategoryForm={setShowCategoryForm}
        />
      )}
      {!showAreaForm && !showCategoryForm && (
        <>
          <Filters filters={filters} setFilters={setFilters} />
          <Styled.CategoriesContainer>
            {categories.map((category) => (
              <Styled.Category key={'category-' + category.id}>
                <Styled.CategoryLabel>
                  <div>{category.name}</div>
                  <button>
                    <MdEdit
                      onClick={() => {
                        setShowCategoryForm(true);
                        setFormPresets({
                          area: null,
                          category,
                        });
                      }}
                    />
                  </button>
                </Styled.CategoryLabel>
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
                        setFormPresets={setFormPresets}
                      />
                    ))}
                  <Styled.AddAreaButton
                    onClick={() => {
                      setShowAreaForm(true);
                      setFormPresets({
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
      <button onClick={() => setShowCategoryForm(true)}>Add Category</button>
      <button onClick={() => setReset(true)}>Reset</button>
    </Styled.Container>
  );
};

export default App;
