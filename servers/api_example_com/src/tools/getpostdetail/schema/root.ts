import { z } from "zod"

export const inputParamsSchema = {
  "postId": z.string().uuid().describe("The id of the post you are searching for.")
}