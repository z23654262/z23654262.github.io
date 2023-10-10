/**
 * 钟意工具类
 */
class ZYUtil {
    /**
     * 判断是否主页类
     */
    isIndexs = () => {
        const urls = window.location.href.split('/');
        const indexs = ["", "categories", "tags", "archives", "notes"]
        if (indexs.indexOf(urls[3]) !== -1) {
            return true;
        } else if (indexs.indexOf("wiki") && (urls[4] === "tags" || urls[4] === "")) {
            return true;
        } else return false;
    }
}