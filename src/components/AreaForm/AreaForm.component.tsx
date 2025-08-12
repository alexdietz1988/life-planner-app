import { useEffect, useRef, useState } from 'react';
import { Formik, Field } from 'formik';
import { type Area, type Category } from '../../types';
import * as Styled from './AreaForm.styles';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    selectedArea?.image || null
  );

  const handleClose = () => {
    setShowAreaForm(false);
    document.body.style.overflow = 'auto';
  };

  const handleDelete = () => {
    setAreas((prev) => prev.filter((a) => a.id !== selectedArea?.id));
    handleClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  return (
    <Styled.Container ref={dialogRef} open>
      <Styled.FormWrapper>
        <Formik
          initialValues={{
            name: selectedArea?.name || '',
            category: selectedCategory?.id || 1,
          }}
          onSubmit={(values) => {
            setAreas((prev: Area[]) => {
              const newArea: Area = {
                id: selectedArea?.id || prev.length,
                category: Number(values.category),
                name: values.name,
                status: selectedArea?.status || 'good',
                priority: selectedArea?.priority || 'low',
                image: selectedImage || '',
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
            handleClose();
          }}
        >
          <Styled.Form>
            <h1>New Area</h1>
            <Field name="name" placeholder="Area Name" />
            <Field as="select" name="category">
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Field>

            <Styled.ImageField>
              <h2>Select an Image</h2>
              <Styled.ImageContainer>
                {images.map((image) => (
                  <Styled.Image
                    key={image.name}
                    src={image.src}
                    onClick={() => setSelectedImage(image.name)}
                    selected={selectedImage === image.name}
                  />
                ))}
              </Styled.ImageContainer>
            </Styled.ImageField>
            <Styled.Buttons>
              <button type="button" onClick={handleClose}>
                <MdCancel />
              </button>
              <button type="submit">
                <FaCheck />
              </button>
            </Styled.Buttons>
            {selectedArea && <div onClick={handleDelete}>Delete Area</div>}
          </Styled.Form>
        </Formik>
      </Styled.FormWrapper>
    </Styled.Container>
  );
};

export default AreaForm;
