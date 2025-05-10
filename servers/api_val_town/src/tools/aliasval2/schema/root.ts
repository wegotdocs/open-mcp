import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username of the user whose val you are looking for"),
  "val_name": z.string().describe("Name of the val you’re looking for")
}