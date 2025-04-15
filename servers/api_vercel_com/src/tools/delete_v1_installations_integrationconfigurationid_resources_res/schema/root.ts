import { z } from "zod"

export const inputParams = {
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "itemId": z.string()
}