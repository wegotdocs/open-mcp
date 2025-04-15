import { z } from "zod"

export const inputParams = {
  "evaluation_id": z.string(),
  "status": z.union([z.enum(["EVALUATION_INITIALIZED","EVALUATION_STARTED","EVALUATION_FINISHED","EVALUATION_FINISHED_WITH_ERRORS","EVALUATION_FAILED","EVALUATION_AGGREGATION_FAILED"]), z.null()]).optional()
}