import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().min(1).max(512).optional(),
  "catalog": z.string().min(1).max(128).describe("Either a name or id of an existing catalog in TheHive or if a catalog with this name does not exists, one will be created"),
  "variant": z.string().min(1).max(128).optional()
}