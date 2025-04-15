import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "gitBranch": z.string().max(250).describe("If defined, the git branch of the environment variable to filter the results (must have target=preview)").optional(),
  "decrypt": z.enum(["true","false"]).describe("If true, the environment variable value will be decrypted").optional(),
  "source": z.string().describe("The source that is calling the endpoint.").optional(),
  "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(),
  "customEnvironmentSlug": z.string().describe("The custom environment slug (name) within the project").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}