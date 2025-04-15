import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "componentSource": z.enum(["jira","compass","auto"]).describe("The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.").optional()
}