import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Id of the coaching team"),
  "member_id": z.string().nullable().describe("The id of the user added to the coaching team."),
  "role": z.enum(["coach","trainee"]).nullable().describe("The role of the user added.")
}