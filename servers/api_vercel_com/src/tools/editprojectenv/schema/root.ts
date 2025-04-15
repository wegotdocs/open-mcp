import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "id": z.string().describe("The unique environment variable identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "key": z.string().describe("The name of the environment variable").optional(),
  "target": z.array(z.enum(["production","preview","development"])).describe("The target environment of the environment variable").optional(),
  "gitBranch": z.string().max(250).nullable().describe("If defined, the git branch of the environment variable (must have target=preview)").optional(),
  "type": z.enum(["system","secret","encrypted","plain","sensitive"]).describe("The type of environment variable").optional(),
  "value": z.string().describe("The value of the environment variable").optional(),
  "customEnvironmentIds": z.array(z.string()).describe("The custom environments that the environment variable should be synced to").optional(),
  "comment": z.string().max(500).describe("A comment to add context on what this env var is for").optional()
}