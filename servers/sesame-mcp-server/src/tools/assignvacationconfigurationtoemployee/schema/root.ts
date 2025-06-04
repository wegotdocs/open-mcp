import { z } from "zod"

export const inputParamsSchema = {
  "vacationConfigurationId": z.string().uuid().describe("Vacation Configuration ID"),
  "employeeId": z.string().uuid(),
  "year": z.number()
}