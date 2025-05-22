import { z } from "zod"

export const inputParamsSchema = {
  "prompt": z.string().nullable().describe("关键词[重庆有哪些美食]"),
  "deviceId": z.string().nullable().describe("设备ID[123456]")
}