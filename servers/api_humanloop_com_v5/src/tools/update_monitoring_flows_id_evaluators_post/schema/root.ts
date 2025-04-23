import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "activate": z.array(z.union([z.object({ "evaluator_version_id": z.string().describe("Unique identifier for the Evaluator Version to be used for monitoring.") }), z.object({ "evaluator_id": z.string().describe("Unique identifier for the Evaluator to be used for monitoring."), "environment_id": z.string().describe("Unique identifier for the Environment. The Evaluator Version deployed to this Environment will be used for monitoring.") })])).describe("Evaluators to activate for Monitoring. These will be automatically run on new Logs.").optional(),
  "deactivate": z.array(z.union([z.object({ "evaluator_version_id": z.string().describe("Unique identifier for the Evaluator Version to be used for monitoring.") }), z.object({ "evaluator_id": z.string().describe("Unique identifier for the Evaluator to be used for monitoring."), "environment_id": z.string().describe("Unique identifier for the Environment. The Evaluator Version deployed to this Environment will be used for monitoring.") })])).describe("Evaluators to deactivate. These will not be run on new Logs.").optional()
}