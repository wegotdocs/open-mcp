import { z } from "zod"

export const inputParams = {
  "evaluation_id": z.string(),
  "evaluation_scenario_id": z.string(),
  "evaluation_type": z.enum(["human_a_b_testing","single_model_test"]),
  "vote": z.union([z.string(), z.null()]).optional(),
  "score": z.union([z.string(), z.number().int(), z.null()]).optional(),
  "correct_answer": z.union([z.string(), z.null()]).optional(),
  "outputs": z.union([z.array(z.object({ "variant_id": z.string(), "variant_output": z.string() })), z.null()]).optional(),
  "inputs": z.union([z.array(z.object({ "input_name": z.string(), "input_value": z.string() })), z.null()]).optional(),
  "is_pinned": z.union([z.boolean(), z.null()]).optional(),
  "note": z.union([z.string(), z.null()]).optional()
}