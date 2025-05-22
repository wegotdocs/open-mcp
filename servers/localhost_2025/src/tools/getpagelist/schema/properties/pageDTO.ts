import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().nullable().describe("唯一标识符[1111]").optional(),
  "userId": z.string().nullable().describe("用户ID[22222]").optional(),
  "title": z.string().nullable().describe("标题[成都冬瓜火锅]").optional(),
  "content": z.string().nullable().describe("标题[成都冬瓜火锅]").optional(),
  "url": z.string().nullable().describe("广告图片[https://picsum.photos/400/300?random=1]").optional(),
  "status": z.number().int().nullable().describe("审核状态[1-待审核,2-审核通过,3-已驳回]").optional(),
  "redirectType": z.number().int().nullable().describe("跳转链接类型[1-站点,2-app]").optional(),
  "redirectUrl": z.string().nullable().describe("链接[weixin://dl/business/?t=1641024000&appid=wx35eba38d6762427a&path=pages/index/index%3Fid%3D123&ENV_VERSION=develop]").optional()
}