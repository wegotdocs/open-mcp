import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().max(150).nullable().optional(),
  "phone_number": z.string().regex(new RegExp("^\\+?1?\\d{9,15}$")).max(15).describe("Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.").optional(),
  "cell_number": z.string().regex(new RegExp("^\\+?1?\\d{9,15}$")).max(15).describe("Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.").optional(),
  "twitter_username": z.string().max(150).nullable().optional(),
  "github_username": z.string().max(150).nullable().optional(),
  "slack_username": z.string().max(150).nullable().describe("Email address associated with your slack account").optional(),
  "slack_user_id": z.string().max(25).nullable().optional(),
  "block_execution": z.boolean().describe("Instead of async deduping a finding the findings will be deduped synchronously and will 'block' the user until completion.").optional(),
  "force_password_reset": z.boolean().describe("Forces this user to reset their password on next login.").optional(),
  "user": z.number().int()
}