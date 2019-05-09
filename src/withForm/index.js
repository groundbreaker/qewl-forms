import {
  compose,
  setDisplayName,
  withStateHandlers,
  withHandlers
} from "recompose";
import omit from "omit-deep";

import { createValidator } from "../validation";
import { mb } from "../utils/vendor/mb.js";
import merge from "../utils/merge";
import { processInput } from "../utils/json-schema";
import { errorReducer } from "../utils/errorReducer";
import { createApiDict } from "../../test/test-utils";

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
    withHandlers(initialProps => {
      // Expensive ops.  Do them once, keep in closure.
      // API dict creation should really only happen once, or maybe on build.
      const apiSchema = createApiDict(initialProps.apiSchema);
      const validator = createValidator({ apiSchema, inputType: input });

      return {
        validateFormData: ({ setErrors }) => data => {
          try {
            validator(data);
            const noErr = { errors: null, dataValid: true };
            setErrors(noErr);
            return noErr;
          } catch (err) {
            const errors = err.errors.reduce(errorReducer, {});
            setErrors({ errors, dataValid: false });
            return errors;
          }
        }
      };
    })
  );
};

export default withForm;
