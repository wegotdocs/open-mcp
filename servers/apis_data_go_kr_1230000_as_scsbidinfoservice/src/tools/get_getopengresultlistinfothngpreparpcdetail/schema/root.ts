import { z } from "zod"

export const inputParamsSchema = {
  "bidNtceNo": z.string().describe("공고번호"),
  "bidNtceOrd": z.string().describe("입찰 차수"),
  "bidClsfcNo": z.string().describe("입찰분류번호"),
  "rbidNo": z.string().describe("재입찰번호"),
  "pageNo": z.number().int().describe("페이지 번호"),
  "numOfRows": z.number().int().describe("페이지당 건수")
}