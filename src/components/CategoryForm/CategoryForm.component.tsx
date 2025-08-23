import { Formik, Form, Field } from 'formik';
import { type Category } from '../../types';

interface CategoryFormProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  presetCategory?: Category;
  setShowCategoryForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryForm = ({
  categories,
  setCategories,
  presetCategory,
  setShowCategoryForm,
}: CategoryFormProps) => {
  const handleSubmit = (newCategory: { name: string; id: number }) => {
    setCategories((prev) => {
      if (newCategory.id > prev.length) {
        return [...prev, newCategory];
      }
      const newCategories: Category[] = [];
      for (const category of prev) {
        if (category.id === newCategory.id) {
          newCategories.push(newCategory);
        } else {
          newCategories.push(category);
        }
      }
      return newCategories;
    });
    setShowCategoryForm(false);
  };
  const defaultCategory: Category = { id: categories.length + 1, name: '' };
  return (
    <Formik
      initialValues={{
        name: presetCategory?.name || defaultCategory.name,
        id: presetCategory?.id || defaultCategory.id,
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <h1>New Category</h1>
        <div>
          <label htmlFor="name">Category Name</label>
          <Field name="name" placeholder="Category Name" />
        </div>
        <button type="submit">Save Category</button>
      </Form>
    </Formik>
  );
};

export default CategoryForm;
