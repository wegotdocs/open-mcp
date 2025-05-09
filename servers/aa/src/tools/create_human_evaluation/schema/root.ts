import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string(),
  "variant_ids": z.array(z.string()),
  "evaluation_type": z.enum(["human_a_b_testing","single_model_test"]),
  "inputs": z.array(z.string()),
  "testset_id": z.string(),
  "status": z.string()
}