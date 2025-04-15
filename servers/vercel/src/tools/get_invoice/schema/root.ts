import { z } from "zod"

export const inputParamsSchema = {
  "integrationConfigurationId": z.string(),
  "invoiceId": z.string()
}