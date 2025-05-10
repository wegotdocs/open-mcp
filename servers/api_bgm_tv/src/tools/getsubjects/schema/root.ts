import { z } from "zod"

export const inputParamsSchema = {
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- `1` 为 书籍\n- `2` 为 动画\n- `3` 为 音乐\n- `4` 为 游戏\n- `6` 为 三次元\n\n没有 `5`"),
  "cat": z.union([z.union([z.literal(0), z.literal(1001), z.literal(1002), z.literal(1003)]).describe("书籍类型\n- `0` 为 其他\n- `1001` 为 漫画\n- `1002` 为 小说\n- `1003` 为 画集"), z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(5)]).describe("动画类型\n- `0` 为 其他\n- `1` 为 TV\n- `2` 为 OVA\n- `3` 为 Movie\n- `5` 为 WEB"), z.union([z.literal(0), z.literal(4001), z.literal(4003), z.literal(4002), z.literal(4005)]).describe("游戏类型\n- `0` 为 其他\n- `4001` 为 游戏\n- `4002` 为 软件\n- `4003` 为 扩展包\n- `4005` 为 桌游"), z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(6001), z.literal(6002), z.literal(6003), z.literal(6004)]).describe("电影类型\n- `0` 为 其他\n- `1` 为 日剧\n- `2` 为 欧美剧\n- `3` 为 华语剧\n- `6001` 为 电视剧\n- `6002` 为 电影\n- `6003` 为 演出\n- `6004` 为 综艺")]).describe("条目分类，参照 `SubjectCategory` enum").optional(),
  "series": z.boolean().describe("是否系列，仅对书籍类型的条目有效").optional(),
  "platform": z.string().describe("平台，仅对游戏类型的条目有效").optional(),
  "sort": z.string().describe("排序，枚举值 {date|rank}").optional(),
  "year": z.number().int().describe("年份").optional(),
  "month": z.number().int().describe("月份").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}