import { z } from "zod"

export const inputParams = {
  "evaluation_scenario_id": z.string(),
  "score": z.number()
}