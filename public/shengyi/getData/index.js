import Ajax from './Ajax';

/**
 * 公司动态
 */
export const newsLists = page_id => Ajax('get', `/api/newsLists/page_id/${page_id}`);

/**
 * 产品分类
 */
export const GoodsClassNameList = () => Ajax('get', '/api/GoodsClassNameList');

/**
 * 商品详情
 */
export const goodsInfo = g_id => Ajax('get', `/api/goodsInfo/${g_id}`);

/**
 * 文件下载
 */
export const fileDown = file_id => Ajax('get', `/api/fileDown/file_id/${file_id}`);

/**
 * 文章详情
 */
export const newsInfo = news_id => Ajax('get', `/api/newsInfo/${news_id}`);

export const goodsShow = () => Ajax('get', '/api/goodsShow');