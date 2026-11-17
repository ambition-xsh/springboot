/**
 * 与后端 ApiResult 对齐
 * @typedef {{ code: number, success: boolean, data: T, message: string }} ApiResult
 * @template T
 */

async function readApi(res) {
  const text = await res.text()
  if (!text.trim()) {
    if (!res.ok) throw new Error(res.statusText || '请求失败')
    return undefined
  }
  const body = JSON.parse(text)
  if (!res.ok || body.success === false || (body.code != null && body.code !== 0)) {
    throw new Error(body.message || res.statusText || '请求失败')
  }
  return body.data
}

/** 提交在线留言 */
export async function createMessage(payload) {
  const res = await fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      phone: payload.phone,
      content: payload.content,
    }),
  })
  return readApi(res)
}

/** 查看留言列表（需管理密钥） */
export async function fetchMessages(adminKey) {
  const res = await fetch('/api/messages', {
    headers: { 'X-Admin-Key': adminKey },
  })
  return readApi(res)
}
