import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "password": z.string().max(200).describe("password").optional(),
  "server": z.string().max(200).describe("url to check"),
  "username": z.string().max(200).describe("username").optional(),
  "Authorization": z.string().describe("Accepts api gateway access.")
}