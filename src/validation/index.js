import MAIN from '../models/validation';

class Validation {
  /**
   * @param {config} Object
   * @example
   * {
   *  target : 'ORDER-CREATE',
   *  data : {}
   * }
   */
  validate = (config) => {
    const { data, target } = config;
    let errors = {};
    return new Promise((resolve, reject) => {
      let VALIDATION_KEYS = Object.keys(MAIN[target]);
      VALIDATION_KEYS.forEach((e) => {
        let item = MAIN[target][e];
        if (item.type === 'Object') {
          Object.keys(item.fields).forEach((field) => {
            if (item.fields[field].required && !data[e][field]) {
              errors[field] = {
                label: 'required',
                id: field,
              };
            }
            if (
              item.fields[field].validation &&
              data[e][field] &&
              !item.fields[field].validation(data[e][field])
            ) {
              errors[field] = {
                label: 'not valid',
                id: field,
              };
            }
          });
        } else if (item.type === 'Array') {
          if (
            data[e] &&
            Array.isArray(data[e]) &&
            data[e].length >= item.minLength
          ) {
          } else {
            errors[e] = {
              label: item.error,
              id: e,
            };
          }
        }
      });
      if (Object.keys(errors).length > 0) reject(errors);
      else resolve('GREAT');
    });
  };
}

export default Validation;
