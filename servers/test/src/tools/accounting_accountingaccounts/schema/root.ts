import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "account_number": z.string().optional(),
  "account_name": z.string().optional(),
  "parent_account_number": z.string().optional(),
  "account_key": z.string().optional(),
  "parent_id": z.number().optional(),
  "id": z.number().optional(),
  "ids": z.array(z.string()).optional(),
  "mixed": z.string().optional(),
  "amount_from": z.number().optional(),
  "amount_to": z.number().optional(),
  "search": z.string().optional(),
  "barcode": z.string().optional(),
  "group_id": z.number().optional(),
  "service_organization_identification": z.string().optional(),
  "type": z.enum(["0","1","2","3","4"]).describe("ROOT_TYPE = 0;  FINANCIAL_TYPE = 1; ORGANIZATION_TYPE = 2; EMPLOYEE_TYPE = 3; COMMODITY_TYPE = 4;").optional(),
  "currency": z.number().optional(),
  "country": z.string().optional()
}