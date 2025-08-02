import { Formik, Form, Field } from 'formik';
import { type Area } from '../../types';

interface NewAreaFormProps {
  categoryId: number;
  setLifeAreas: React.Dispatch<React.SetStateAction<Area[]>>;
}

const NewAreaForm = ({ categoryId, setLifeAreas }: NewAreaFormProps) => {
  return (
    <div>
      <h2>Add New Area in Category {categoryId}</h2>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) =>
          setLifeAreas((prev) => {
            return [
              ...prev,
              {
                id: prev.length,
                category: categoryId,
                name: values.name,
                status: 'good',
                priority: 'high',
              },
            ];
          })
        }
      >
        <Form>
          <Field name="name" placeholder="Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewAreaForm;
