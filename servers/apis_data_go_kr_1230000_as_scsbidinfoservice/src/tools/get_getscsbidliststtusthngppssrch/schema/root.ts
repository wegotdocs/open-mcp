import { z } from "zod"

export const inputParamsSchema = {
  "inqryDiv": z.string().describe("조회구분 (1=날짜)"),
  "inqryBgnDt": z.string().describe("조회 시작일시 (YYYYMMDDHHMM)"),
  "inqryEndDt": z.string().describe("조회 종료일시 (YYYYMMDDHHMM)"),
  "pageNo": z.number().int().describe("페이지 번호"),
  "numOfRows": z.number().int().describe("페이지당 건수"),
  "bidNtceNm": z.string().describe("입찰공고명 키워드 (부분 일치)").optional(),
  "ntceInsttNm": z.string().describe("공고기관명 키워드 (부분 일치)").optional(),
  "dminsttNm": z.string().describe("수요기관명 키워드 (부분 일치)").optional(),
  "indstrytyNm": z.string().describe("업종명 키워드 (부분 일치)").optional(),
  "refNo": z.string().describe("참조번호 키워드 (부분 일치)").optional()
}