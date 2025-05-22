import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call's id."),
  "participant": z.object({ "number": z.string().nullable().describe("The phone number which the call should be transferred to.") }).nullable().describe("New member of the call to add. Can be a number or a Target. In case of a target, it must have a primary number assigned.")
}