import { z } from "zod"

export const inputParamsSchema = {
  "import_bank_account": z.boolean().optional(),
  "stakeholder_business": z.string().optional(),
  "manager_all_business_email": z.string().optional(),
  "overwrite_type": z.string().optional(),
  "period_name_to_import_census_information": z.string().optional()
}