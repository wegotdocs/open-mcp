import { z } from "zod"

export const inputParamsSchema = {
  "integrationConfigurationId": z.string(),
  "memberId": z.string()
}