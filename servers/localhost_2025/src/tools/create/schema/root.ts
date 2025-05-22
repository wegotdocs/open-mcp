import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().nullable().describe("用户ID[22222]"),
  "title": z.string().regex(new RegExp("\\S*")).min(2).max(1024).describe("标题[成都冬瓜火锅]"),
  "content": z.string().regex(new RegExp("\\S*")).min(2).max(1024).describe("标题[成都冬瓜火锅]"),
  "url": z.string().regex(new RegExp("\\S*")).min(2).max(1024).describe("广告图片[https://picsum.photos/400/300?random=1]"),
  "status": z.number().int().nullable().describe("审核状态[1-待审核,2-审核通过,3-已驳回]"),
  "redirectType": z.number().int().nullable().describe("跳转链接类型[1-站点,2-app]"),
  "redirectUrl": z.string().regex(new RegExp("\\S*")).min(2).max(1024).describe("链接[weixin://dl/business/?t=1641024000&appid=wx35eba38d6762427a&path=pages/index/index%3Fid%3D123&ENV_VERSION=develop]")
}