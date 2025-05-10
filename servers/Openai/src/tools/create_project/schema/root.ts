import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The friendly name of the project, this name appears in reports.")
}