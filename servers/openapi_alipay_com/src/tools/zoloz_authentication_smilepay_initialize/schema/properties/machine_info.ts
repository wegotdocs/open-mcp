import { z } from "zod"

export const inputParams = {
  "camera_drive_ver": z.string().describe("摄像头驱动版本号").optional(),
  "camera_model": z.string().describe("摄像头型号").optional(),
  "camera_name": z.string().describe("摄像头名称").optional(),
  "camera_ver": z.string().describe("摄像头版本号").optional(),
  "ext": z.string().describe("扩展信息").optional(),
  "machine_code": z.string().describe("机具编码").optional(),
  "machine_model": z.string().describe("机具型号").optional(),
  "machine_ver": z.string().describe("机具版本号").optional()
}