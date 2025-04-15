import { z } from "zod"

export const inputParamsSchema = {
  "name": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `name` to the tool, first call the tool `expandSchema` with \"/properties/accountHolderDetails/properties/individualDetails/properties/name\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The name of the individual.\n>Make sure your account holder registers using the name shown on their Photo ID. \n Maximum length: 80 characters \n Cannot contain numbers. /n Cannot be empty.</property-description>").optional(),
  "personalData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `personalData` to the tool, first call the tool `expandSchema` with \"/properties/accountHolderDetails/properties/individualDetails/properties/personalData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Personal information of the individual.</property-description>").optional()
}