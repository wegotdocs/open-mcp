import { z } from "zod"

export const inputParamsSchema = {
  "cases": z.array(z.number().int()).describe("A list of case numbers to be shirted."),
  "queue": z.enum(["Billing","NumberAdmin"]).describe("Specifies the queue to be shifted to.")
}