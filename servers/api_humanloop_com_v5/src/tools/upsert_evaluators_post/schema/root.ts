import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().describe("Path of the Evaluator, including the name. This locates the Evaluator in the Humanloop filesystem and is used as as a unique identifier. For example: `folder/name` or just `name`.").optional(),
  "id": z.string().describe("ID for an existing Evaluator.").optional(),
  "version_name": z.string().describe("Unique name for the Evaluator version. Version names must be unique for a given Evaluator.").optional(),
  "version_description": z.string().describe("Description of the version, e.g., the changes made in this version.").optional(),
  "spec": z.object({ "arguments_type": z.string(), "return_type": z.string(), "attributes": z.record(z.any()).describe("Additional fields to describe the Evaluator. Helpful to separate Evaluator versions from each other with details on how they were created or used.").optional(), "options": z.array(z.object({ "name": z.string().describe("The name of the option."), "valence": z.string().optional() })).describe("The options that can be applied as judgments. Only for Evaluators with `return_type` of 'boolean', 'select' or 'multi_select'.").optional(), "number_limits": z.string().optional(), "number_valence": z.string().optional(), "evaluator_type": z.literal("llm").describe("The type of the evaluator."), "prompt": z.string().optional() })
}