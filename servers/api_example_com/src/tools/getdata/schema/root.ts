import { z } from "zod"

export const inputParamsSchema = {
  "NamePattern": z.string().describe("The pattern to filter data by name.").optional(),
  "Active": z.boolean().describe("The optional filter for active or inactive data.").optional(),
  "Status": z.number().int().describe("The optional filter for data status.").optional(),
  "UseCaseId": z.string().uuid().describe("The optional filter for use case identifier.").optional(),
  "PageNumber": z.number().int().describe("The optional page number for pagination.").optional(),
  "PageSize": z.number().int().describe("The optional page size for pagination.").optional(),
  "OrderBy": z.string().describe("The optional property to order the results by.").optional(),
  "OrderDirection": z.string().describe("The optional direction for ordering the results (ascending or descending).").optional(),
  "ExternalId": z.string().describe("The optional filter for the external data identifier.").optional(),
  "DeletedDate": z.string().datetime({ offset: true }).describe("The optional filter for the external data deleted date.").optional(),
  "Attempts": z.number().int().describe("The optional filter Attempts").optional(),
  "ReturnSource": z.boolean().describe("The optional filter for retornable or not retornable data.").optional()
}