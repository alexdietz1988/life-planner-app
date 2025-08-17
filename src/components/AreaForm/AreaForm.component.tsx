import { Formik, Field } from 'formik';
import { type Area, type Category } from '../../types';
import * as Styled from './AreaForm.styles';
import { images } from '../../data';

interface AreaFormProps {
  selectedArea?: Area | null;
  selectedCategory?: Category | null;
  categories: Category[];
  setAreas: React.Dispatch<React.SetStateAction<Area[]>>;
  setShowAreaForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AreaForm = ({
  selectedArea,
  selectedCategory,
  categories,
  setAreas,
  setShowAreaForm,
}: AreaFormProps) => {
  const handleSubmit = (values: {
    name: string;
    category: number;
    image: string;
  }) => {
    setAreas((prev: Area[]) => {
      const newArea: Area = {
        id: selectedArea?.id || prev.length,
        category: Number(values.category),
        name: values.name,
        status: selectedArea?.status || 'good',
        priority: selectedArea?.priority || 'low',
        image: values.image || '',
      };
      if (!selectedArea) {
        return [...prev, newArea];
      }
      const newAreas: Area[] = [];
      for (const a of prev) {
        if (a.id === selectedArea.id) {
          newAreas.push(newArea);
        } else {
          newAreas.push(a);
        }
      }
      return newAreas;
    });
    setShowAreaForm(false);
  };

  const handleDelete = () => {
    setAreas((prev) => prev.filter((a) => a.id !== selectedArea?.id));
    setShowAreaForm(false);
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={{
          name: selectedArea?.name || '',
          category: selectedCategory?.id || 1,
          image: selectedArea?.image || '',
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Styled.Form>
          <h1>{selectedArea ? 'Edit Area' : 'New Area'}</h1>
          <Styled.FieldGroup>
            <label htmlFor="name">Area Name</label>
            <Field name="name" placeholder="Area Name" />
          </Styled.FieldGroup>
          <Styled.FieldGroup>
            <label htmlFor="category">Category</label>
            {categories.map((category) => (
              <label key={category.name}>
                <Field type="radio" name="category" value={category.id} />
                {category.name}
              </label>
            ))}
          </Styled.FieldGroup>
          <Styled.FieldGroup>
            <label>Image</label>
            <Styled.ImageContainer>
              {images.map((image) => (
                <label key={image.name}>
                  <Field type="radio" name="image" value={image.name} />
                  <img src={image.src} />
                </label>
              ))}
            </Styled.ImageContainer>
          </Styled.FieldGroup>
          <Styled.Button type="submit" background="green">
            Save
          </Styled.Button>
        </Styled.Form>
      </Formik>
      <Styled.SmallButtons>
        <button type="button" onClick={() => setShowAreaForm(false)}>
          Cancel
        </button>
        {selectedArea && <button onClick={handleDelete}>Delete Area</button>}
      </Styled.SmallButtons>
    </Styled.Container>
  );
};

export default AreaForm;
