import { z } from "zod"

export const inputParamsSchema = {
  "fieldName": z.string().describe("The name of the field.").optional(),
  "fieldValue": z.string().describe("The partial field item name entered by the user.").optional(),
  "predicateName": z.string().describe("The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.").optional(),
  "predicateValue": z.string().describe("The partial predicate item name entered by the user.").optional()
}