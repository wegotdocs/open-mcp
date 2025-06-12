import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "groupName": z.string().describe("The encoded name of group."),
  "userName": z.string().describe("The encoded username.")
}