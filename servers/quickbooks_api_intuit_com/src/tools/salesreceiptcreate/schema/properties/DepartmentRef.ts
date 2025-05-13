import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().describe("The ID for the referenced object as found in the Id field of the object payload. The context is set by the type of reference and is specific to the QuickBooks company file.").optional(),
  "name": z.string().describe("An identifying name for the object being referenced by value and is derived from the field that holds the common name of that object. This varies by context and specific type of object referenced. For example, references to a Customer object use Customer.DisplayName to populate this field. Optionally returned in responses, implementation dependent.").optional()
}