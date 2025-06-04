import { z } from "zod"

export const inputParamsSchema = {
  "code": z.number().int().describe("Find Employee by code").optional(),
  "dni": z.string().describe("Find Employee by dni").optional(),
  "email": z.string().email().describe("Find Employee by email").optional(),
  "departmentIds": z.array(z.string().uuid()).describe("Find Employee by department Ids").optional(),
  "officeIds": z.array(z.string().uuid()).describe("Find Employee by office Ids").optional(),
  "limit": z.number().int().describe("Limit employees").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional(),
  "status": z.enum(["active","inactive"]).describe("<b>Supported operators:</b> in").optional()
}