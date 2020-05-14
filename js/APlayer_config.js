const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  theme: '#b7daff',
  loop: 'all',
  order: 'list',
  preload: 'auto',
  volume: 0.5,
  lrcType: 3,
  mutex: true,
  listFolded: false,

  audio: [
    {
      name: '大鱼',
      artist: '周深',
      lrc: '/music/lrc/大鱼 - 周深.lrc',
      cover: 'https://p2.music.126.net/aiPQXP8mdLovQSrKsM3hMQ==/1416170985079958.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E5%A4%A7%E9%B1%BC%20-%20%E5%91%A8%E6%B7%B1.mp3'
    },
    {
      name: '盗将行',
      artist: '花粥，马雨阳',
      lrc: '/music/lrc/盗将行 - 花粥，马雨阳.lrc',
      cover: 'https://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E7%9B%97%E5%B0%86%E8%A1%8C%20-%20%E8%8A%B1%E7%B2%A5,%E9%A9%AC%E9%9B%A8%E9%98%B3.mp3'
    },
    {
      name: '心如止水',
      artist: 'Ice Paper',
      lrc: '/music/lrc/心如止水 - Ice Paper.lrc',
      cover: 'https://i.kfs.io/album/global/54740523,0v1/fit/500x500.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E5%BF%83%E5%A6%82%E6%AD%A2%E6%B0%B4%20-%20Ice%20Paper.mp3'
    },
    {
      name: '我的梦',
      artist: '张靓颖',
      lrc: '/music/lrc/我的梦 - 张靓颖.lrc',
      cover: 'https://n.sinaimg.cn/ent/transform/20151229/WLT_-fxmxxsp7232280.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E6%88%91%E7%9A%84%E6%A2%A6%20-%20%E5%BC%A0%E9%9D%93%E9%A2%96.mp3'
    },
    {
      name: 'Dream It Possible',
      artist: '张靓颖',
      lrc: '/music/lrc/Dream It Possible - 张靓颖.lrc',
      cover: 'https://p2.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/Dream%20It%20Possible%20-%20%E5%BC%A0%E9%9D%93%E9%A2%96.mp3'
    },
    {
      name: '我很快乐',
      artist: '刘惜君',
      lrc: '/music/lrc/我很快乐 - 刘惜君',
      cover: 'https://p1.music.126.net/aNHxGZC0H1xRQfoz7UqSpQ==/36283883730943.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E6%88%91%E5%BE%88%E5%BF%AB%E4%B9%90%20-%20%E5%88%98%E6%83%9C%E5%90%9B.mp3'
    },
    {
      name: '南山南',
      artist: '马頔',
      lrc: '/music/lrc/南山南 - 马頔',
      cover: 'http://imge.kugou.com/stdmusic/150/20150715/20150715223122826270.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E5%8D%97%E5%B1%B1%E5%8D%97%20-%20%E9%A9%AC%E9%A0%94.mp3'
    },
    {
      name: '起风了',
      artist: '买辣椒也用卷',
      lrc: '/music/lrc/起风了 - 买辣椒也用卷',
      cover: 'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E8%B5%B7%E9%A3%8E%E4%BA%86%20-%20%E4%B9%B0%E8%BE%A3%E6%A4%92%E4%B9%9F%E7%94%A8%E5%88%B8.mp3'
    },
    {
      name: '恋人心',
      artist: '魏新雨',
      lrc: '/music/lrc/起风了 - 买辣椒也用卷',
      cover: 'https://p2.music.126.net/OX6lR0jEjtxPfIgjVUtWww==/5786729697194540.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E6%81%8B%E4%BA%BA%E5%BF%83%20-%20%E9%AD%8F%E6%96%B0%E9%9B%A8.mp3'
    },
    {
      name: '断桥残雪',
      artist: '许嵩',
      lrc: '/music/lrc/断桥残雪 - 许嵩',
      cover: 'https://p2.music.126.net/PEQ69_EwVpuaBmmSkAY0SQ==/58274116284456.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E6%96%AD%E6%A1%A5%E6%AE%8B%E9%9B%AA%20-%20%E8%AE%B8%E5%B5%A9.mp3'
    },
    {
      name: '曾经的你',
      artist: '许巍',
      lrc: '/music/lrc/曾经的你 - 许巍',
      cover: 'https://p1.music.126.net/GoiTB6oG3vQWntnCjKRw0g==/109951163092691594.jpg?param=300x300',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E6%9B%BE%E7%BB%8F%E7%9A%84%E4%BD%A0%20-%20%E8%AE%B8%E5%B7%8D.mp3'
    },
    {
      name: '烟影如画',
      artist: '重小烟',
      lrc: '/music/lrc/烟影如画 - 重小烟',
      cover: 'http://singerimg.kugou.com/uploadpic/softhead/150/20151214/20151214140843180469.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E7%83%9F%E5%BD%B1%E5%A6%82%E7%94%BB%20-%20%E9%87%8D%E5%B0%8F%E7%83%9F.mp3'
    },
    {
      name: '成都',
      artist: '赵雷',
      lrc: '/music/lrc/成都 - 赵雷',
      cover: 'http://imge.kugou.com/stdmusic/150/20161026/20161026104110350398.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E6%88%90%E9%83%BD%20-%20%E8%B5%B5%E9%9B%B7.mp3'
    },
    {
      name: '一个人',
      artist: '夏婉安',
      lrc: '/music/lrc/一个人 - 夏婉安',
      cover: 'http://imge.kugou.com/stdmusic/150/20150715/20150715230628433049.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E4%B8%80%E4%B8%AA%E4%BA%BA%20-%20%E5%A4%8F%E5%A9%89%E5%AE%89.mp3'
    },
    {
      name: '送别',
      artist: '朴树',
      lrc: '/music/lrc/送别 - 朴树',
      cover: 'http://imge.kugou.com/stdmusic/150/20160512/20160512094410431268.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E9%80%81%E5%88%AB%20-%20%E6%9C%B4%E6%A0%91.mp3'
    },
    {
      name: '追光者',
      artist: '岑宁儿',
      lrc: '/music/lrc/追光者 - 岑宁儿',
      cover: 'http://imge.kugou.com/stdmusic/150/20170615/20170615171929677900.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E8%BF%BD%E5%85%89%E8%80%85%20-%20%E5%B2%91%E5%AE%81%E5%84%BF.mp3'
    },
    {
      name: '逆流成河',
      artist: '金南玲',
      lrc: '/music/lrc/逆流成河 - 金南玲',
      cover: 'http://imge.kugou.com/stdmusic/150/20180927/20180927182404805981.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E9%80%86%E6%B5%81%E6%88%90%E6%B2%B3%20-%20%E9%87%91%E5%8D%97%E7%8E%B2.mp3'
    },
    {
      name: 'いつも何度でも',
      artist: '宗次郎',
      lrc: '/music/lrc/いつも何度でも - 宗次郎',
      cover: 'http://imge.kugou.com/stdmusic/150/20150720/20150720192351939143.jpg',
      url: 'https://myblog12.qiniu.yansheng.xyz/audio/mp3/%E3%81%84%E3%81%A4%E3%82%82%E4%BD%95%E5%BA%A6%E3%81%A7%E3%82%82%20-%20%E5%AE%97%E6%AC%A1%E9%83%8E.mp3'
    },
    {
      name: '不再等候的姑娘',
      artist: '魏明华',
      lrc: '/music/lrc/不再等候的姑娘 - 魏明华',
      cover: 'http://imge.kugou.com/stdmusic/20200319/20200319162516166960.jpg',
      url: 'http://mp32.9ku.com/upload/128/2020/05/06/1004039.mp3'
    },
    {
      name: '少年',
      artist: '梦然',
      lrc: '/music/lrc/少年 - 梦然',
      cover: 'http://img3.kuwo.cn/star/albumcover/300/56/21/2954495527.jpg',
      url: 'http://site.show160.com/5f14e8dec81fde492be90103f0a3e7a9/usermusic/MusicFile/201911/20191123091527281.mp3'
    },
    {
      name: '百花香',
      artist: '魏新雨',
      lrc: '/music/lrc/百花香 - 魏新雨',
      cover: 'http://img2.kuwo.cn/star/albumcover/300/23/76/3386768141.jpg',
      url: 'http://mp32.9ku.com/upload/128/2019/11/13/998626.mp3'
    },
    {
      name: '追梦人',
      artist: '凤飞飞',
      lrc: '/music/lrc/追梦人 - 凤飞飞',
      cover: 'http://img4.kuwo.cn/star/albumcover/120/45/5/3674450628.jpg',
      url: 'https://win-web-nf01-sycdn.kuwo.cn/2b1c2450f78421e998f1a5327ba620ea/5eb56133/resource/n1/74/6/642179471.mp3'
    },
    {
      name: '最美的伤口',
      artist: '半吨兄弟',
      lrc: '/music/lrc/最美的伤口 - 半吨兄弟',
      cover: 'http://img3.kuwo.cn/star/albumcover/300/69/15/479388728.jpg',
      url: 'http://zy2.chezai8.com:8801//%E9%85%B7%E6%88%91vip/DJ%E5%B0%8F%E9%B1%BC%E5%84%BF-%E6%9C%80%E7%BE%8E%E7%9A%84%E4%BC%A4%E5%8F%A3.mp3'
    },
    {
      name: '一个人挺好',
      artist: '梦颖',
      lrc: '/music/lrc/一个人挺好 - 梦颖',
      cover: 'http://img1.kuwo.cn/star/albumcover/300/46/24/1713650729.jpg',
      url: 'http://mp32.9ku.com/upload/128/2020/01/22/1001972.mp3'
    },
    {
      name: '桥边姑娘',
      artist: '海伦',
      lrc: '/music/lrc/桥边姑娘 - 海伦',
      cover: 'http://imgxc1.kwcdn.kuwo.cn/star/koowolive/15/17/1586333602371_445133915.jpg',
      url: 'http://mp32.9ku.com/upload/128/2019/12/18/1000452.mp3'
    },
    {
      name: '桃花诺',
      artist: 'G.E.M.邓紫棋',
      lrc: '/music/lrc/桃花诺 - G.E.M.邓紫棋',
      cover: 'http://imgxc1.kwcdn.kuwo.cn/star/koowolive/32/84/1587714060525_510845232.jpg',
      url: 'http://win.web.ri01.sycdn.kuwo.cn/a79d0e5f0410513df5dbd42d2fcc8a94/5eb5792b/resource/n2/64/31/1905168925.mp3'
    },
    {
      name: '你笑起来真好看',
      artist: '李昕融&樊桐舟&李凯稠',
      lrc: '/music/lrc/你笑起来真好看 - 李昕融&樊桐舟&李凯稠',
      cover: 'http://img4.kuwo.cn/star/albumcover/300/37/92/1895437893.jpg',
      url: 'http://mp32.9ku.com/upload/128/2019/05/23/892204.mp3'
    },
    {
      name: '等一分钟',
      artist: '徐誉滕',
      lrc: '/music/lrc/等一分钟 - 徐誉滕',
      cover: 'http://img4.kuwo.cn/star/starheads/120/11/64/793218570.jpg',
      url: 'http://mp3.9ku.com/m4a/79882.m4a'
    },
    {
      name: '念旧',
      artist: '阿悠悠',
      lrc: '/music/lrc/念旧 - 阿悠悠',
      cover: 'http://img1.kuwo.cn/star/albumcover/300/31/25/913297119.jpg',
      url: 'http://mp32.9ku.com/upload/128/2019/08/29/995470.mp3'
    },
    {
      name: '雨蝶',
      artist: '李翊君',
      lrc: '/music/lrc/雨蝶 - 李翊君',
      cover: 'http://img1.kuwo.cn/star/albumcover/120/97/44/363426879.jpg',
      url: 'http://mp3.9ku.com/m4a/1903.m4a'
    },
    {
      name: '平凡之路',
      artist: '朴树',
      lrc: '/music/lrc/平凡之路 - 朴树',
      cover: 'http://img4.kuwo.cn/star/albumcover/120/68/69/2985138734.jpg',
      url: 'http://mp3.9ku.com/m4a/642431.m4a'
    },
    {
      name: '光辉岁月',
      artist: 'Beyond',
      lrc: '/music/lrc/光辉岁月 - Beyond',
      cover: 'http://img4.kuwo.cn/star/albumcover/120/65/42/190103348.jpg',
      url: 'http://mp32.9ku.com/upload/2016/05/06/30001.m4a'
    },
    {
      name: '火苗',
      artist: '格格',
      lrc: '/music/lrc/火苗 - 格格',
      cover: 'http://img1.kuwo.cn/star/albumcover/120/57/58/1597870129.jpg',
      url: 'http://mp3.9ku.com/m4a/179214.m4a'
    },
    {
      name: '夜空中最亮的星',
      artist: '逃跑计划',
      lrc: '/music/lrc/夜空中最亮的星 - 逃跑计划',
      cover: 'http://img3.kuwo.cn/star/albumcover/120/39/61/3660380159.jpg',
      url: 'http://zy2.chezai8.com:8801//%E9%85%B7%E6%88%91vip/%E9%80%83%E8%B7%91%E8%AE%A1%E5%88%92-%E5%A4%9C%E7%A9%BA%E4%B8%AD%E6%9C%80%E4%BA%AE%E7%9A%84%E6%98%9F.mp3'
    },
    {
      name: '旧梦一场',
      artist: '阿悠悠',
      lrc: '/music/lrc/旧梦一场 - 阿悠悠',
      cover: 'http://img1.kuwo.cn/star/albumcover/120/71/46/3694962587.jpg',
      url: 'http://zy2.chezai8.com:8801//kwVIP%E6%8E%92%E5%90%8D%E7%BD%91%E7%BA%A2/20200426/%E9%98%BF%E6%82%A0%E6%82%A0-%E6%97%A7%E6%A2%A6%E4%B8%80%E5%9C%BA.mp3'
    },
    {
      name: '逞强',
      artist: '杨小壮',
      lrc: '/music/lrc/逞强 - 杨小壮',
      cover: 'http://img1.kuwo.cn/star/albumcover/120/79/13/3035649544.jpg',
      url: 'http://zy2.chezai8.com:8801//%E9%85%B7%E6%88%91vip/%E6%9D%A8%E5%B0%8F%E5%A3%AE-%E9%80%9E%E5%BC%BA.mp3'
    }
  ]
});
