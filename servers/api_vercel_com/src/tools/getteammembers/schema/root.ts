import { z } from "zod"

export const inputParams = {
  "limit": z.number().gte(1).describe("Limit how many teams should be returned").optional(),
  "since": z.number().describe("Timestamp in milliseconds to only include members added since then.").optional(),
  "until": z.number().describe("Timestamp in milliseconds to only include members added until then.").optional(),
  "search": z.string().describe("Search team members by their name, username, and email.").optional(),
  "role": z.enum(["OWNER","MEMBER","DEVELOPER","VIEWER","BILLING","CONTRIBUTOR"]).describe("Only return members with the specified team role.").optional(),
  "excludeProject": z.string().describe("Exclude members who belong to the specified project.").optional(),
  "eligibleMembersForProjectId": z.string().describe("Include team members who are eligible to be members of the specified project.").optional()
}