# @open-mcp/api_bgm_tv

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_bgm_tv \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_bgm_tv \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_bgm_tv \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_bgm_tv": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_bgm_tv"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_bgm_tv
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_bgm_tv`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### getcalendar

**Environment variables**



**Input schema**

```ts
{}
```

### searchsubjectbykeywords

**Environment variables**



**Input schema**

```ts
{
  "keywords": z.string().describe("关键词 <br> 需要 URL Encode"),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型 <br> 1 = book <br> 2 = anime <br> 3 = music <br> 4 = game <br> 6 = real").optional(),
  "responseGroup": z.enum(["small","medium","large"]).describe("返回数据大小").optional(),
  "start": z.number().int().describe("开始条数").optional(),
  "max_results": z.number().int().lte(25).describe("每页条数 <br> 最多 25").optional()
}
```

### searchsubjects

**Environment variables**



**Input schema**

```ts
{
  "limit": z.number().int().describe("分页参数").optional(),
  "offset": z.number().int().describe("分页参数").optional(),
  "keyword": z.string(),
  "sort": z.enum(["match","heat","rank","score"]).describe("排序规则\n\n- \`match\` meilisearch 的默认排序，按照匹配程度\n- \`heat\` 收藏人数\n- \`rank\` 排名由高到低\n- \`score\` 评分\n").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n不同条件之间是 \`且\` 的关系").optional()
}
```

### searchcharacters

**Environment variables**



**Input schema**

```ts
{
  "limit": z.number().int().describe("分页参数").optional(),
  "offset": z.number().int().describe("分页参数").optional(),
  "keyword": z.string(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n不同条件之间是 \`且\` 的关系").optional()
}
```

### searchpersons

**Environment variables**



**Input schema**

```ts
{
  "limit": z.number().int().describe("分页参数").optional(),
  "offset": z.number().int().describe("分页参数").optional(),
  "keyword": z.string(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\n不同条件之间是 \`且\` 的关系").optional()
}
```

### getsubjects

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- \`1\` 为 书籍\n- \`2\` 为 动画\n- \`3\` 为 音乐\n- \`4\` 为 游戏\n- \`6\` 为 三次元\n\n没有 \`5\`"),
  "cat": z.union([z.union([z.literal(0), z.literal(1001), z.literal(1002), z.literal(1003)]).describe("书籍类型\n- \`0\` 为 其他\n- \`1001\` 为 漫画\n- \`1002\` 为 小说\n- \`1003\` 为 画集"), z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(5)]).describe("动画类型\n- \`0\` 为 其他\n- \`1\` 为 TV\n- \`2\` 为 OVA\n- \`3\` 为 Movie\n- \`5\` 为 WEB"), z.union([z.literal(0), z.literal(4001), z.literal(4003), z.literal(4002), z.literal(4005)]).describe("游戏类型\n- \`0\` 为 其他\n- \`4001\` 为 游戏\n- \`4002\` 为 软件\n- \`4003\` 为 扩展包\n- \`4005\` 为 桌游"), z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(6001), z.literal(6002), z.literal(6003), z.literal(6004)]).describe("电影类型\n- \`0\` 为 其他\n- \`1\` 为 日剧\n- \`2\` 为 欧美剧\n- \`3\` 为 华语剧\n- \`6001\` 为 电视剧\n- \`6002\` 为 电影\n- \`6003\` 为 演出\n- \`6004\` 为 综艺")]).describe("条目分类，参照 \`SubjectCategory\` enum").optional(),
  "series": z.boolean().describe("是否系列，仅对书籍类型的条目有效").optional(),
  "platform": z.string().describe("平台，仅对游戏类型的条目有效").optional(),
  "sort": z.string().describe("排序，枚举值 {date|rank}").optional(),
  "year": z.number().int().describe("年份").optional(),
  "month": z.number().int().describe("月份").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getsubjectbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}
```

### getsubjectimagebyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "type": z.string().describe("枚举值 {small|grid|large|medium|common}")
}
```

### getrelatedpersonsbysubjectid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}
```

### getrelatedcharactersbysubjectid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}
```

### getrelatedsubjectsbysubjectid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}
```

### getepisodes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "type": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]).describe("本篇 = 0\n特别篇 = 1\nOP = 2\nED = 3\n预告/宣传/广告 = 4\nMAD = 5\n其他 = 6").describe("参照章节的\`type\`").optional(),
  "limit": z.number().int().gte(1).lte(200).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getepisodebyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episode_id": z.number().int().gte(1).describe("剧集 ID")
}
```

### getcharacterbyid

**Environment variables**



**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID")
}
```

### getcharacterimagebyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID"),
  "type": z.string().describe("枚举值 {small|grid|large|medium}")
}
```

### getrelatedsubjectsbycharacterid

**Environment variables**



**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID")
}
```

### getrelatedpersonsbycharacterid

**Environment variables**



**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID")
}
```

### collectcharacterbycharacteridanduserid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID")
}
```

### uncollectcharacterbycharacteridanduserid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID")
}
```

### getpersonbyid

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("人物 ID")
}
```

### getpersonimagebyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("人物 ID"),
  "type": z.string().describe("枚举值 {small|grid|large|medium}")
}
```

### getrelatedsubjectsbypersonid

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("人物 ID")
}
```

### getrelatedcharactersbypersonid

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("人物 ID")
}
```

### collectpersonbypersonidanduserid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("人物 ID")
}
```

### uncollectpersonbypersonidanduserid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("人物 ID")
}
```

### getuserbyname

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。")
}
```

### getuseravatarbyname

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "type": z.string().describe("枚举值 {small|large|medium}")
}
```

### getmyself

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getusercollectionsbyusername

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "subject_type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- \`1\` 为 书籍\n- \`2\` 为 动画\n- \`3\` 为 音乐\n- \`4\` 为 游戏\n- \`6\` 为 三次元\n\n没有 \`5\`").optional(),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).describe("- \`1\`: 想看\n- \`2\`: 看过\n- \`3\`: 在看\n- \`4\`: 搁置\n- \`5\`: 抛弃").describe("收藏类型，默认为全部\n\n具体含义见 [CollectionType](#model-CollectionType)").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getusercollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}
```

### postusercollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "type": z.string().optional(),
  "rate": z.number().int().gte(0).lte(10).describe("评分，\`0\` 表示删除评分").optional(),
  "ep_status": z.number().int().gte(0).describe("只能用于修改书籍条目进度").optional(),
  "vol_status": z.number().int().gte(0).describe("只能用于修改书籍条目进度").optional(),
  "comment": z.string().describe("评价").optional(),
  "private": z.boolean().describe("仅自己可见").optional(),
  "tags": z.array(z.string().describe("不能包含空格")).describe("不传或者 \`null\` 都会被忽略，传 \`[]\` 则会删除所有 tag。").optional()
}
```

### patchusercollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "type": z.string().optional(),
  "rate": z.number().int().gte(0).lte(10).describe("评分，\`0\` 表示删除评分").optional(),
  "ep_status": z.number().int().gte(0).describe("只能用于修改书籍条目进度").optional(),
  "vol_status": z.number().int().gte(0).describe("只能用于修改书籍条目进度").optional(),
  "comment": z.string().describe("评价").optional(),
  "private": z.boolean().describe("仅自己可见").optional(),
  "tags": z.array(z.string().describe("不能包含空格")).describe("不传或者 \`null\` 都会被忽略，传 \`[]\` 则会删除所有 tag。").optional()
}
```

### getusersubjectepisodecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "offset": z.number().int().gte(0).describe("分页参数").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("分页参数").optional(),
  "episode_type": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]).describe("本篇 = 0\n特别篇 = 1\nOP = 2\nED = 3\n预告/宣传/广告 = 4\nMAD = 5\n其他 = 6").optional()
}
```

### patchusersubjectepisodecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "episode_id": z.array(z.number().int()),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("- \`0\`: 未收藏\n- \`1\`: 想看\n- \`2\`: 看过\n- \`3\`: 抛弃")
}
```

### getuserepisodecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episode_id": z.number().int().gte(1).describe("剧集 ID")
}
```

### putuserepisodecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episode_id": z.number().int().gte(1).describe("剧集 ID"),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("- \`0\`: 未收藏\n- \`1\`: 想看\n- \`2\`: 看过\n- \`3\`: 抛弃")
}
```

### getusercharactercollections

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。")
}
```

### getusercharactercollection

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "character_id": z.number().int().gte(1).describe("角色 ID")
}
```

### getuserpersoncollections

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。")
}
```

### getuserpersoncollection

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "person_id": z.number().int().gte(1).describe("人物 ID")
}
```

### getpersonrevisions

**Environment variables**



**Input schema**

```ts
{
  "person_id": z.number().int().gte(1).describe("角色 ID"),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getpersonrevisionbyrevisionid

**Environment variables**



**Input schema**

```ts
{
  "revision_id": z.number().int().gte(1).describe("历史版本 ID")
}
```

### getcharacterrevisions

**Environment variables**



**Input schema**

```ts
{
  "character_id": z.number().int().gte(1).describe("角色 ID"),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getcharacterrevisionbyrevisionid

**Environment variables**



**Input schema**

```ts
{
  "revision_id": z.number().int().gte(1).describe("版本 ID")
}
```

### getsubjectrevisions

**Environment variables**



**Input schema**

```ts
{
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getsubjectrevisionbyrevisionid

**Environment variables**



**Input schema**

```ts
{
  "revision_id": z.number().int().gte(1).describe("版本 ID")
}
```

### getepisoderevisions

**Environment variables**



**Input schema**

```ts
{
  "episode_id": z.number().int().gte(1).describe("章节 ID"),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### getepisoderevisionbyrevisionid

**Environment variables**



**Input schema**

```ts
{
  "revision_id": z.number().int().gte(1).describe("版本 ID")
}
```

### newindex

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getindexbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID")
}
```

### editindexbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "title": z.string().optional(),
  "description": z.string().optional()
}
```

### getindexsubjectsbyindexid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- \`1\` 为 书籍\n- \`2\` 为 动画\n- \`3\` 为 音乐\n- \`4\` 为 游戏\n- \`6\` 为 三次元\n\n没有 \`5\`").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}
```

### addsubjecttoindexbyindexid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "subject_id": z.number().int().optional(),
  "sort": z.number().int().describe("排序条件，越小越靠前").optional(),
  "comment": z.string().optional()
}
```

### editindexsubjectsbyindexidandsubjectid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "sort": z.number().int().describe("排序条件，越小越靠前").optional(),
  "comment": z.string().optional()
}
```

### deleltesubjectfromindexbyindexidandsubjectid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}
```

### collectindexbyindexidanduserid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID")
}
```

### uncollectindexbyindexidanduserid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "index_id": z.number().int().gte(1).describe("目录 ID")
}
```
