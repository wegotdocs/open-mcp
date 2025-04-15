import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the field configuration scheme."),
  "mappings": z.array(z.object({ "fieldConfigurationId": z.string().describe("The ID of the field configuration."), "issueTypeId": z.string().describe("The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request.") }).strict().describe("The field configuration to issue type mapping.")).describe("Field configuration to issue type mappings.")
}