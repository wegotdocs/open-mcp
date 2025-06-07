import { z } from "zod"

export const inputParamsSchema = {
  "auth_enabled": z.union([z.boolean(), z.null()]).describe("Enable/disable authentication").optional(),
  "auth_mode": z.union([z.string(), z.null()]).describe("Authentication mode: auth0, local, or both").optional(),
  "auth0_domain": z.union([z.string(), z.null()]).describe("Auth0 domain").optional(),
  "auth0_api_audience": z.union([z.string(), z.null()]).describe("Auth0 API audience").optional(),
  "auth0_client_id": z.union([z.string(), z.null()]).describe("Auth0 client ID for frontend").optional()
}