import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the new task.").optional(),
  "include": z.string().regex(new RegExp("([notes|assignee|subtasks|attachments|tags|followers|projects|dates|dependencies|parent])(,\\1)*")).describe("A comma-separated list of fields that will be duplicated to the new task.\n##### Fields\n- assignee\n- attachments\n- dates\n- dependencies\n- followers\n- notes\n- parent\n- projects\n- subtasks\n- tags").optional()
}