import { z } from "zod"

export const inputParamsSchema = {
  "vacancyId": z.string().uuid().describe("Vacancy ID")
}