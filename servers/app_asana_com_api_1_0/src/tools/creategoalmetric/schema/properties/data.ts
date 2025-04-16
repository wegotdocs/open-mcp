import { z } from "zod"

export const inputParamsSchema = {
  "gid": z.string().describe("Globally unique identifier of the resource, as a string.").readonly().optional(),
  "resource_type": z.string().describe("The base type of this resource.").readonly().optional(),
  "resource_subtype": z.literal("number").describe("The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.").readonly().optional(),
  "precision": z.number().int().describe("*Conditional*. Only relevant for goal metrics of type `Number`. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.\nFor percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.").optional(),
  "unit": z.enum(["none","currency","percentage"]).describe("A supported unit of measure for the goal metric, or none.").optional(),
  "currency_code": z.string().nullable().describe("ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.").optional(),
  "initial_number_value": z.number().describe("This number is the start value of a goal metric of type number.").optional(),
  "target_number_value": z.number().describe("This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.").optional(),
  "current_number_value": z.number().describe("This number is the current value of a goal metric of type number.").optional(),
  "current_display_value": z.string().describe("This string is the current value of a goal metric of type string.").readonly().optional(),
  "progress_source": z.enum(["manual","subgoal_progress","project_task_completion","project_milestone_completion","task_completion","external"]).describe("This field defines how the progress value of a goal metric is being calculated. A goal's progress can be provided manually by the user, calculated automatically from contributing subgoals, projects, or tasks, or managed by an integration with an external data source, such as Salesforce.").optional(),
  "is_custom_weight": z.boolean().describe("*Conditional*. Only relevant if `metric.progress_source` is one of `subgoal_progress`, `project_task_completion`, `project_milestone_completion`, or `task_completion`. If true, we use the supporting object's custom weight to calculate the goal's progress. If false, we treat all supporting objects as equally weighted").optional()
}