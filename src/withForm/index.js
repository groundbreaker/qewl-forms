import {
  compose,
  setDisplayName,
  withStateHandlers,
  withHandlers
} from "recompose";
import omit from "omit-deep";

import { validator } from "../validation";
import { mb } from "../utils/vendor/mb.js";
import merge from "../utils/merge";
import { processInput } from "../utils/json-schema";

export const withForm = ({
  input,
  formName,
  dataKey,
  mergeKey = [],
  defaultValues = {}
}) => {
  const formData = formName ? `${formName}FormData` : `formData`;
  const formErrors = formName ? `${formName}FormErrors` : `formErrors`;
  const formUpdate = formName ? `${formName}FormUpdate` : `formUpdate`;
  const schema = formName ? `${formName}Schema` : `schema`;

  return compose(
    setDisplayName(`withFormQewl(${formName})`),
    withStateHandlers(
      ({ apiSchema, ...props }) => ({
        [schema]: processInput({ apiSchema, input }),
        [formData]: omit(
          { ...mb(mergeKey)(props[dataKey]), ...defaultValues },
          ["__typename"]
        ),
        [formErrors]: {
          errors: null,
          dataValid: false
        }
      }),
      {
        [formUpdate]: state => value => ({
          ...state,
          [formData]: merge(state[formData], value)
        }),
        setErrors: state => value => ({ ...state, [formErrors]: value })
      }
    ),
    withHandlers({
      validateFormData: ({ setErrors, ...props }) => optionalData => {
        const errors = validator(
          optionalData || props[formData],
          props[schema]
        );
        setErrors(errors);
        return errors;
      }
    })
  );
};

export default withForm;
