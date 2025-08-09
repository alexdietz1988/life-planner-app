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
      <Styled.FormWrapper>
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
            <h1>New Area</h1>
            <Field name="name" placeholder="Area Name" />
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
              <button type="button" onClick={() => setAddAreaInCategory(null)}>
                <MdCancel />
              </button>
              <button type="submit">
                <FaCheck />
              </button>
            </Styled.Buttons>
          </Styled.Form>
        </Formik>
      </Styled.FormWrapper>
    </Styled.Container>
  );
};

export default NewArea;
