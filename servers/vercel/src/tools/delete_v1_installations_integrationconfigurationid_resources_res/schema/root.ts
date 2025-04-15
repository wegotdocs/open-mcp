import { z } from "zod"

export const inputParamsSchema = {
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "itemId": z.string()
}