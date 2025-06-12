import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "clientCode": z.string().describe("The client identification."),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml"]).describe("The Accept header.").optional()
}