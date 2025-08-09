import { useEffect, useRef, useState } from 'react';
import { Formik, Field } from 'formik';
import { type Area } from '../../types';
import * as Styled from './NewArea.styles';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { images } from '../../data';

interface NewAreaFormProps {
  categoryId: number;
  setAreas: React.Dispatch<React.SetStateAction<Area[]>>;
  setAddAreaInCategory: React.Dispatch<React.SetStateAction<number | null>>;
}

const NewArea = ({
  categoryId,
  setAreas,
  setAddAreaInCategory,
}: NewAreaFormProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  return (
    <Styled.Container ref={dialogRef} open>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) => {
          setAreas((prev) => [
            ...prev,
            {
              id: prev.length,
              category: categoryId,
              name: values.name,
              status: 'good',
              priority: 'high',
              image: selectedImage || '',
            },
          ]);
          setAddAreaInCategory(null);
        }}
      >
        <Styled.Form>
          <Field name="name" placeholder="New Area" />
          <Styled.ImageContainer>
            {images.map((image) => (
              <img
                src={image.src}
                onClick={() => setSelectedImage(image.name)}
              />
            ))}
          </Styled.ImageContainer>
          <Styled.Buttons>
            <button type="button" onClick={() => setAddAreaInCategory(null)}>
              <MdCancel />
            </button>
            <button type="submit">
              <FaCheck />
            </button>
          </Styled.Buttons>
        </Styled.Form>
      </Formik>
    </Styled.Container>
  );
};

export default NewArea;
