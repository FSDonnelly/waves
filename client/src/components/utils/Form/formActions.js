export const validate = (element, formData = []) => {
  let error = [true, ''];

  if (element.validation.email) {
    const valid = /^[^@]+@[^@]+\.[^@]+$/.test(element.value);
    const message = `${!valid ? 'Must be a valid email' : ''} `;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''} `;
    error = !valid ? [valid, message] : error;
  }
  return error;
};

export const update = (element, formData, formName) => {
  const newFormData = {
    ...formData
  };

  const newELement = {
    ...newFormData[element.id]
  };

  newELement.value = element.e.target.value;

  if (element.blur) {
    let validData = validate(newELement, formData);
    newELement.valid = validData[0];
    newELement.validationMessage = validData[1];
  }

  newELement.touched = element.blur;
  newFormData[element.id] = newELement;

  return newFormData;
};
