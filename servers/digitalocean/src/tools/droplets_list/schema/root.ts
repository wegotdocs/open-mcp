import { z } from "zod"

export const inputParamsSchema = {
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "tag_name": z.string().describe("Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.").optional(),
  "name": z.string().describe("Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`.").optional(),
  "type": z.enum(["droplets","gpus"]).describe("When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`.").optional()
}