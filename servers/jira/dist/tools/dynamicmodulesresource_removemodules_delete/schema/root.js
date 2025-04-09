import { z } from "zod";
export const inputParams = {
    "moduleKey": z.array(z.string()).describe("The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.\nFor example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.\nNonexistent keys are ignored.").optional()
};
