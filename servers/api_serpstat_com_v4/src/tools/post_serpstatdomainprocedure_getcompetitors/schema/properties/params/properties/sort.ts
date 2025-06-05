import { z } from "zod"

export const inputParamsSchema = {
  "relevance": z.enum(["desc","asc"]).describe("**Default sort**. Sort by by relevance of keyword sets of rival domains").optional(),
  "visible": z.enum(["desc","asc"]).describe("Sort by visibility of competitiors domains").optional(),
  "keywords": z.enum(["desc","asc"]).describe("total keywords in top of rival domain").optional(),
  "traff": z.enum(["desc","asc"]).describe("Sort by estimated search traffic of rival domains").optional(),
  "visible_dynamic": z.enum(["desc","asc"]).describe("Sort by change in visibility of rival domains").optional(),
  "keywords_dynamic": z.enum(["desc","asc"]).describe("Sort by change in keywords count of rival domains").optional(),
  "traff_dynamic": z.enum(["desc","asc"]).describe("Sort by change in estimated search traffic of rival domains").optional(),
  "new_keywords": z.enum(["desc","asc"]).describe("Sort by change in recently appared keywords in SERPs of rival domains").optional(),
  "ads_dynamic": z.enum(["desc","asc"]).describe("Sort by change in ads numbers of rival domains").optional(),
  "out_keywords": z.enum(["desc","asc"]).describe("Sort by change in recently dropped from SERPs keywords of rival domains").optional(),
  "rised_keywords": z.enum(["desc","asc"]).describe("Sort by change in recently moved up in SERPs keywords of rival domains").optional(),
  "down_keywords": z.enum(["desc","asc"]).describe("Sort by change in recently moved down in SERPs keywords of rival domains").optional(),
  "ad_keywords": z.enum(["desc","asc"]).describe("Sort by ads keywords of rival domains").optional(),
  "ads": z.enum(["desc","asc"]).describe("Sort by ads numbers of rival domains").optional(),
  "intersected": z.enum(["desc","asc"]).describe("Sort by volume of intersected keywords with rival domains").optional(),
  "new_relevance": z.enum(["desc","asc"]).describe("Sort by volume of intersected new keywords with rival domains").optional(),
  "our_relevance": z.enum(["desc","asc"]).describe("Sort by volume of intersected out of SERP keywords with rival domains").optional()
}