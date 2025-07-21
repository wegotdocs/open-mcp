import { z } from "zod"

export const inputParamsSchema = {
  "inqryDiv": z.string().describe("조회구분 (1=날짜)"),
  "inqryBgnDt": z.string().describe("조회 시작일시 (YYYYMMDDHHMM)"),
  "inqryEndDt": z.string().describe("조회 종료일시 (YYYYMMDDHHMM)"),
  "pageNo": z.number().int().describe("페이지 번호"),
  "numOfRows": z.number().int().describe("페이지당 건수")
}