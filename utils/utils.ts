/**
 * 生成随机字符串
 */
export function randomStr(): string {
  return Math.random().toString(36).substr(2)
}
