const navConf = require('./navConf');
const editThisOnly = require('./editThisOnly');

module.exports = {
    nav: navConf,
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    author: 'jokervTv',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 备案
    record: '蜀ICP备20002314号',
    recordLink: 'http://www.beian.miit.gov.cn/',
    cyberSecurityRecord: '川公网安备 51012202000595号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012202000595',
    // 项目开始时间
    startYear: '2020',
    editLinks: true,
    repo: editThisOnly.repo,
    editLinkText: '帮助我们改善此页面！',
    valineConfig: {
        appId: 'CrLyhWBjuj2e5twD1CzdPken-gzGzoHsz',
        appKey: 'SVyf25usATLCAriYR4b119HF',
        avatar: 'hide',
        verify: true,
        notify: true,
        mate: ['nick', 'mail'],
        placeholder: 'ヾﾉ≧≦)o来啊，快活啊!'
    },
}