import { Formik, Field } from 'formik';
import { type Area } from '../../types';
import * as Styled from './NewArea.styles';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

interface NewAreaFormProps {
  categoryId: number;
  setLifeAreas: React.Dispatch<React.SetStateAction<Area[]>>;
  setAddAreaInCategory: React.Dispatch<React.SetStateAction<number | null>>;
}

const NewArea = ({
  categoryId,
  setLifeAreas,
  setAddAreaInCategory,
}: NewAreaFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) =>
          setLifeAreas((prev) => [
            ...prev,
            {
              id: prev.length,
              category: categoryId,
              name: values.name,
              status: 'good',
              priority: 'high',
            },
          ])
        }
      >
        <Styled.Form>
          <Field name="name" placeholder="New Area" />
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
    </div>
  );
};

export default NewArea;
