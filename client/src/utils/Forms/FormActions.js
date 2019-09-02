export const validate = (element, formData = []) => {
  let error = [true, ''];

  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

export const updateForm = (element, formData, formName) => {
  const newFormData = {
    ...formData
  };
  const newElement = {
    ...newFormData[element.id]
  };

  newElement.value = element.e.target.value;

  if (element.blur) {
    let validData = validate(newElement, formData);
    newElement.valid = validData[0];
    newElement.validaitonMessage = validData[1];
  }

  newElement.touched = element.blur;
  newFormData[element.id] = newElement;

  return newFormData;
};
