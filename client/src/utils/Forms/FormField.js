import React from 'react';

const FormField = ({
  formData: { element, config, value, validation, valid, validationMessage },
  change,
  id
}) => {
  const showError = () => {
    let errorMessage = null;

    if (validation && !valid) {
      errorMessage = <div className='error_label'>{validationMessage}</div>;
    }

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (element) {
      case 'input':
        formTemplate = (
          <div className='formBlock'>
            <input
              {...config}
              value={value}
              onBlurr={e => change({ e, id, blur: true })}
              onChange={e => change({ e, id })}
            />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default FormField;
