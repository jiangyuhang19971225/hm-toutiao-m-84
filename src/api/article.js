// 导入文章相关的API函数
import request from '@/utils/request.js'
/**
 * 获取文章列表
 * @param {Integer} channelId - 频道ID
 * @param {String} timestamp - 时间戳 相对于分页页码
 */
export const getArticles = (channelId, timestamp) => {
  return request('/app/v1_1/articles', 'get', {
    channel_id: channelId,
    timestamp,
    with_top: 1
  })
}
// // 导出  文章相关的API函数
// import request from '@/utils/request.js'

// /**
//  * 获取文章列表
//  * @param {Integer} channelId - 频道ID
//  * @param {Integer} timestamp - 时间戳
//  */
// export const getArticles = (channelId, timestamp) => {
//   return request('/app/v1_1/articles', 'get', {
//     channel_id: channelId,
//     timestamp,
//     with_top: 1
//   })
// }
