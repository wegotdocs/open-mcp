import { z } from "zod"

export const inputParamsSchema = {
  "containerId": z.number().int(),
  "containerSpecCode": z.string()
}