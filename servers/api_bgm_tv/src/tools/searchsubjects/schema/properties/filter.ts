import { z } from "zod"

export const inputParamsSchema = {
  "type": z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- `1` 为 书籍\n- `2` 为 动画\n- `3` 为 音乐\n- `4` 为 游戏\n- `6` 为 三次元\n\n没有 `5`")).describe("条目类型，参照 `SubjectType` enum，多值之间为 `或` 的关系。").optional(),
  "meta_tags": z.array(z.string()).describe("公共标签。多个值之间为 `且` 关系。可以用 `-` 排除标签。比如 `-科幻` 可以排除科幻标签。").optional(),
  "tag": z.array(z.string()).describe("标签，可以多次出现。多值之间为 `且` 关系。").optional(),
  "air_date": z.array(z.string()).describe("播出日期/发售日期，日期必需为 `YYYY-MM-DD` 格式。多值之间为 `且` 关系。").optional(),
  "rating": z.array(z.string()).describe("用于搜索指定评分的条目，多值之间为 `且` 关系。").optional(),
  "rank": z.array(z.string()).describe("用于搜索指定排名的条目，多值之间为 `且` 关系。").optional(),
  "nsfw": z.boolean().describe("无权限的用户会直接忽略此字段，不会返回R18条目。\n\n默认或者 `null` 会返回包含 R18 的所有搜索结果。\n\n`true` 只会返回 R18 条目。\n\n`false` 只会返回非 R18 条目。\n").optional()
}