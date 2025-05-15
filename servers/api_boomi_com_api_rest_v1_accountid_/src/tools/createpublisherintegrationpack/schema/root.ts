import { z } from "zod"

export const inputParamsSchema = {
  "Description": z.string(),
  "PublisherPackagedComponents": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PublisherPackagedComponents` to the tool, first call the tool `expandSchema` with \"/properties/PublisherPackagedComponents\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "id": z.string().describe("A unique ID assigned by the system to the integration pack.").optional(),
  "installationType": z.enum(["SINGLE","MULTI"]).describe("The type of integration pack. Possible values:\n\n- SINGLE — single attachment \n- MULTI — multiple attachment").optional(),
  "name": z.string().describe("The name of the integration pack.").optional(),
  "operationType": z.enum(["ADD","DELETE"]).describe("Specifies the type of operation (ADD or DELETE) to perform when updating the packaged component to the integration pack. This field is mandatory for the Update operation and is not available for other operations").optional()
}