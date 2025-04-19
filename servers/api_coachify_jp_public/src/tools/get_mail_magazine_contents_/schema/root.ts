import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().describe("ページ番号").optional(),
  "page_size": z.number().int().lte(20).describe("1ページあたりの表示件数（最大20）").optional()
}