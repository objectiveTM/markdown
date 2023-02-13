/**
 * @version 1.0
 * @see https://github.com/objectiveTM/markdown
 * @param {String} _markdown
 * @returns {String} mark-dowm to HTML
 * 
 * ## Description 
 * Convert mark-down to html
 * 
 * ## Example code
 * ```js
 * markdown(`
 * # h1
 * ## h2
 * ### h3
 * #### h4
 * #### h5
 * #### h6
 * __underLine__
 * **bold**
 * *italic*
 * ~~delete~~
 * - dot list
 * ---  Horizontal Rule
 * [hyperLink](https://discord.gg/w2Fw7UeZmY)
 * https://discord.gg/w2Fw7UeZmY
 * `);
 * ```
 * 
 * ## Example result
 * ```html
 * <br/><h1>h1</h1><br/><h2>h2</h2><br/><h3>h3</h3><br/><u>underLine</u><br/><b>bold</b><br/><del>delete</del><br/><a href="https://discord.gg/w2Fw7UeZmY">hyperLink</a> <a href="https://discord.gg/w2Fw7UeZmY">https://discord.gg/w2Fw7UeZmY</a><br/>
 * ```
 */
function markdown(_markdown){
        let md = `\n${_markdown}\n`
        let rmx = md
            .replace(/^# (.*$)/gim , `<h1>$1</h1>`) // heading 1
            .replace(/^## (.*$)/gim , `<h2>$1</h2>`) // heading 2
            .replace(/^### (.*$)/gim , `<h3>$1</h3>`) // heading 3
            .replace(/^#### (.*$)/gim , `<h4>$1</h4>`) // heading 4
            .replace(/^##### (.*$)/gim , `<h5>$1</h5>`) // heading 5
            .replace(/^###### (.*$)/gim , `<h6>$1</h6>`) // heading 6
            
            .replace(/__(.*)__/gim , `<u>$1</u>`) // underline
            .replace(/\*\*(.*)\*\*/gim , `<b>$1</b>`) // bold
            .replace(/\*(.*)\*/gim , `<i>$1</i>`) // italic
            .replace(/~~(.*)~~/gim , `<del>$1</del>`) // delete line
            .replace(/^- (.*$)/gim , `<li>$1</li>`) // dot list

            .replace(/---/, '<hr/>') // Horizontal Rule

            .replace(/\[(.*)\]\(https:\/\/(.*)\)/gim , `<a href="https://$2">$1</a>`) // redirect website
            .replace(/[^\"]http(s?):\/\/(www\.)?(.*)\.(.*[^ ])\/([^ |\n]{0,100})([ |\n]?[^\<\/a\>])/gim , ` <a href="http$1://$2$3.$4/$5">http$1://$2$3.$4/$5</a>$6`.replace("\n" , "")) // redirect website

            .replace(/\\([^\\])/gim , `$1`)
            .slice(1,-1)
            .replace(/\n/gim , `<br/>`); // break
            
        return rmx
}
