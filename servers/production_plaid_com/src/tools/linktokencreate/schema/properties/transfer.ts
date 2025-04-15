import { z } from "zod"

export const inputParamsSchema = {
  "intent_id": z.string().describe("The `id` returned by the `/transfer/intent/create` endpoint.").optional(),
  "authorization_id": z.string().describe("The `id` returned by the `/transfer/authorization/create` endpoint. Used to indicate Link session to complete required user action in order to make a decision for the authorization. If set, `access_token` can be omitted.").optional(),
  "payment_profile_token": z.string().describe("The `payment_profile_token` returned by the `/payment_profile/create` endpoint.").optional()
}