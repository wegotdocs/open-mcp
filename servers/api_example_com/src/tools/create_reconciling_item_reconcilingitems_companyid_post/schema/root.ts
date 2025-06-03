import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "amount": z.number().describe("Amount of the reconciling item"),
  "currency": z.string(),
  "date": z.string().datetime({ offset: true }).describe("Date of the reconciling item"),
  "description": z.string().describe("Description of the reconciling item"),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Metadata of the reconciling item. You can use it to store any information you want to associate with the reconciling item.</property-description>").optional(),
  "additionalInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `additionalInfo` to the tool, first call the tool `expandSchema` with \"/properties/additionalInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional information of the reconciling item</property-description>").optional(),
  "customId": z.string().describe("Embat custom/auto unique reconciling item identifier. You can use as your internal reconciling item identifier"),
  "reconcilingSourceCustomId": z.string().describe("Embat custom/auto unique Reconciling Source identifier. You can get them from 'Reconciling Sources' endpoints")
}