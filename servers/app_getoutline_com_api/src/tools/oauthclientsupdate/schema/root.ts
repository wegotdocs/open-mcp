import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Unique identifier for the OAuth client."),
  "name": z.string().describe("Name of the OAuth client.").optional(),
  "description": z.string().describe("A short description of this OAuth client.").optional(),
  "developerName": z.string().describe("The name of the developer who created this OAuth client.").optional(),
  "developerUrl": z.string().describe("The URL of the developer who created this OAuth client.").optional(),
  "avatarUrl": z.string().describe("A URL pointing to an image representing the OAuth client.").optional(),
  "redirectUris": z.array(z.string()).describe("List of redirect URIs for the OAuth client.").optional(),
  "published": z.boolean().describe("Whether the OAuth client is available to other workspaces.").optional()
}