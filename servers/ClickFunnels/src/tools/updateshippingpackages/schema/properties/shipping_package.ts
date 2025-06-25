import { z } from "zod"

export const inputParamsSchema = {
  "package_type": z.enum(["box","envelope","soft_package"]).describe("Package Type").optional(),
  "height": z.number().describe("Height").optional(),
  "width": z.number().describe("Width").optional(),
  "length": z.number().describe("Length").optional(),
  "distance_unit": z.string().describe("Distance Unit").optional(),
  "empty_weight": z.union([z.string().describe("Empty Weight"), z.null().describe("Empty Weight")]).describe("Empty Weight").optional(),
  "weight": z.union([z.number().describe("Weight"), z.null().describe("Weight")]).describe("Weight").optional(),
  "weight_unit": z.enum(["lb","kg","g","oz"]).describe("Weight Unit").optional(),
  "default_package": z.union([z.boolean().describe("Default Package"), z.null().describe("Default Package")]).describe("Default Package").optional(),
  "name": z.string().describe("Name").optional(),
  "carrier": z.enum(["fedex","ups","usps"]).describe("Carrier").optional()
}