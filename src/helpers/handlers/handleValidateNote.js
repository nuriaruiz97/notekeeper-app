import { validateType } from "../validation/ValidateType";
import { validateEnum } from "../validation/validateEnum";
import { validateNonEmpty } from "../validation/validateNonEmpty";

export const handleValidateNote = (note) => {
  if (
    validateType({ note }) &&
    validateEnum({ note }) &&
    validateNonEmpty({ note })
  )
    return true;
    else{
        return false;
    }
};
