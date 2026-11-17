import logoTiktok from '@/assets/10.png'
import logoQq from '@/assets/11.png'
import logoNetease from '@/assets/22.png'
import logoXhs from '@/assets/33.png'
import logoSina from '@/assets/44.png'
import logoYidian from '@/assets/55.png'
import logoZhihu from '@/assets/66.png'
import logoUc from '@/assets/77.png'
import logoBaidu from '@/assets/88.png'
import logoBilibili from '@/assets/99.png'
import logoToutiao from '@/assets/1111.png'
import logoKuaishou from '@/assets/1212.png'
import logoSohu from '@/assets/1313.png'
import logoVideo from '@/assets/1414.png'

export const company = {
  name: '武汉市鼎立传媒有限公司',
  shortName: '鼎立传媒',
  en: 'DING LI MEDIA',
  founded: '2026',
  city: '武汉',
  phone: '400-000-XXXX',
  email: 'contact@dingli-media.com',
  address: '湖北省武汉市',
  tagline: '守护公正的媒体力量',
  heroTitle: '鼎立传媒 —— 守护公正的媒体力量',
  intro:
    '当权益受损、维权渠道受阻，不必独自为难。公司坚守合法合规经营准则，依托全媒体渠道客观还原事实，依托专业媒体资源理性传递合理诉求，以合规舆论传播维护公平正义，助力各类纠纷妥善协调，让每一份委屈都能被社会看见。',
  closing:
    '鼎立传媒—深耕合法媒体曝光维权服务。公司规范经营，获评企业信用、重合同守信用、质量服务诚信企业。我们严守法律底线，全部服务依托客户真实客观证据开展，坚决杜绝伪造材料、恶意抹黑、造谣侵权等违规操作；所有稿件实行多级专业审核，全程保护客户隐私，为有纠纷诉求的当事人提供安全合规、高效落地的维权舆论监督渠道。',
}

export const navItems = [
  { path: '/', name: '网站首页' },
  { path: '/about', name: '公司简介' },
  { path: '/services', name: '服务范围' },
  { path: '/cases', name: '案例展示' },
  { path: '/news', name: '新闻资讯' },
  { path: '/contact', name: '联系我们' },
]

/** 四大业务模块 */
export const modules = [
  {
    key: 'editorial',
    title: '采编模块',
    subtitle: '采编板块｜还原事实，筑牢维权根基',
    en: 'Editorial',
    desc: '作为维权曝光专属信息源头，专业采编团队一对一对接个人与企业维权需求。通过深度访谈、实地取证、多方信息交叉核验，完整梳理事件脉络、固化关键证据、提炼核心诉求。我们摒弃碎片化素材采集，严格遵循「事实清晰、逻辑严谨、诉求明确」采编规范，为稿件审核、内容发布、媒体深度报道提供完整可溯源的真实素材，保障每一条维权内容有据可依。',
  },
  {
    key: 'review',
    title: '审核模块',
    subtitle: '合规把关，筑牢内容传播安全底线',
    en: 'Compliance',
    desc: '我们搭建「法律合规 + 平台传播规范」双重审核体系，法务与资深新媒体审核人员协同把关。从法律层面核验证据、措辞、诉求，规避侵权与法律风险；结合各平台规则打磨内容，拿捏分寸，不夸大事实、不弱化矛盾，做到维权有力度、传播有尺度，所有曝光内容合规可发布，全程护航高效维权。',
  },
  {
    key: 'publish',
    title: '发稿板块',
    subtitle: '矩阵传播、放大维权声量',
    en: 'Publishing',
    desc: '发稿是曝光落地关键环节，我们拥有覆盖主流新媒体、垂直维权渠道、行业资讯站点的全媒体传播矩阵。结合纠纷类型、诉求重点与目标人群定制专属发稿方案，完成选题策划、标题优化、分平台内容适配分发，做到核心信息精准触达、维权诉求全面扩散。联动自有账号矩阵与行业 KOL 同步发声，打造立体化传播声势，快速拉高事件热度，为线下维权营造正向舆论，让诉求从无人问津快速获得广泛关注。',
  },
  {
    key: 'research',
    title: '媒体人调研板块',
    subtitle: '权威发声、推动问题落地',
    en: 'Investigation',
    desc: '本板块是维权升级的核心支撑，联动权威媒体人与专业深度调查团队，专门处理重大、复杂、典型维权案件。通过实地走访、权威信源采访、专业客观解读，完整还原事件经过、深挖矛盾根源，产出兼具公信力、影响力、传播力的深度调查报道。依托媒体权威背书与社会监督力量，倒逼责任方正视问题、促成主管部门介入督办，以「舆论曝光 + 权威监督」双模式发力，将舆论声量切实转化为维权实效，加速各类纠纷妥善化解。',
  },
]

/** 兼容旧字段名，供部分页面复用 */
export const services = modules.map((m) => ({
  title: m.title,
  en: m.en,
  desc: m.subtitle,
  detail: m.desc,
}))

export const advantages = [
  {
    key: 'resource',
    title: '巨量资源',
    desc: '覆盖官方门户、垂直自媒体全矩阵',
  },
  {
    key: 'custom',
    title: '定制维权曝光方案',
    desc: '根据案件证据、纠纷类型定制报道内容',
  },
  {
    key: 'team',
    title: '专业采编法务团队',
    desc: '资深媒体撰稿 + 合规法务审核',
  },
  {
    key: 'privacy',
    title: '严格隐私保护体系',
    desc: '高度重视客户隐私，建立信息加密系统',
  },
]

export const platformLogos = [
  { name: '抖音', src: logoTiktok },
  { name: 'QQ', src: logoQq },
  { name: '网易新闻', src: logoNetease },
  { name: '小红书', src: logoXhs },
  { name: '新浪', src: logoSina },
  { name: '一点资讯', src: logoYidian },
  { name: '知乎', src: logoZhihu },
  { name: 'UC', src: logoUc },
  { name: '百度', src: logoBaidu },
  { name: '哔哩哔哩', src: logoBilibili },
  { name: '今日头条', src: logoToutiao },
  { name: '快手', src: logoKuaishou },
  { name: '搜狐', src: logoSohu },
  { name: '短视频', src: logoVideo },
]

/** ECharts 用：平台参考规模（保留） */
export const platforms = [
  { name: '百度', value: 60, color: '#2932e1', tip: '日搜索量超60亿' },
  { name: '微博', value: 6, color: '#e6162d', tip: '月活约6亿+' },
  { name: '小红书', value: 3, color: '#ff2442', tip: '月活约3亿+' },
  { name: '今日头条', value: 3, color: '#f04142', tip: '月活约3亿+' },
  { name: '快手', value: 7, color: '#ff4906', tip: '月活约7亿+' },
  { name: '视频号', value: 5, color: '#07c160', tip: '日活超5亿+' },
  { name: 'B站', value: 3.4, color: '#fb7299', tip: '月活约3.4亿+' },
  { name: '知乎', value: 2.8, color: '#0066ff', tip: '月活约2.8亿+' },
]

export const cases = [
  {
    id: 1,
    title: '消费维权曝光专项',
    category: '个人维权',
    summary: '采编取证 + 合规审核 + 矩阵发稿，推动协商与问题解决。',
  },
  {
    id: 2,
    title: '企业纠纷舆论协调',
    category: '企业服务',
    summary: '定制曝光方案，理性传递诉求，助力纠纷妥善协调。',
  },
  {
    id: 3,
    title: '重大案件深度调研',
    category: '媒体人调研',
    summary: '权威媒体人联动调查，产出深度报道，推动问题解决落地。',
  },
  {
    id: 4,
    title: '全媒体矩阵扩散',
    category: '发稿板块',
    summary: '多平台适配分发与 KOL 联动，快速放大维权声量。',
  },
  {
    id: 5,
    title: '合规审核护航',
    category: '审核模块',
    summary: '法律合规与平台规范双审，确保内容可发、风险可控。',
  },
  {
    id: 6,
    title: '证据链采编固化',
    category: '采编模块',
    summary: '深度访谈与多方核验，为曝光提供可溯源真实素材。',
  },
]

export const newsList = [
  {
    id: 1,
    date: '2026-05-12',
    title: '鼎立传媒：以合规舆论监督守护公正',
    summary: '深耕合法媒体曝光维权服务，让每一份委屈都能被社会看见。',
  },
  {
    id: 2,
    date: '2026-04-28',
    title: '采编—审核—发稿：维权内容如何做实',
    summary: '从事实还原到矩阵传播，全流程合规落地的方法论观察。',
  },
  {
    id: 3,
    date: '2026-04-10',
    title: '媒体人调研如何推动复杂纠纷落地',
    summary: '权威发声与社会监督结合，把舆论声量转化为维权实效。',
  },
  {
    id: 4,
    date: '2026-03-22',
    title: '隐私保护与多级审核：安全维权的底线',
    summary: '严守法律与证据真实，杜绝伪造材料与恶意抹黑。',
  },
]
