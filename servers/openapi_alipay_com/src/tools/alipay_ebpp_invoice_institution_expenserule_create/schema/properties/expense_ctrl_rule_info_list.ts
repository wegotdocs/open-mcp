import { z } from "zod"

export const inputParams = {
  "rule_factor": z.string().describe("费控维度").optional(),
  "rule_id": z.string().describe("费控条件ID").optional(),
  "rule_name": z.string().describe("费控条件名称").optional(),
  "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(),
  "rule_value": z.string().describe("费控条件值").optional()
}