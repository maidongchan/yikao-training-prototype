const IMG = {
  stage: "./assets/stage.jpg",
  student: "./assets/student.jpg",
  teacher: "./assets/teacher.jpg",
  faculty2: "./assets/faculty-2.jpg",
};

const teacherResources = [
  {
    id: "t1",
    name: "周予安",
    role: "台词主教",
    avatar: IMG.teacher,
    campusIds: ["cy", "hd"],
    weeklyHours: 18,
    load: 82,
    classes: 5,
    next: "周四 09:00 朝阳校区",
    conflict: true,
  },
  {
    id: "t2",
    name: "林乔",
    role: "形体主教",
    avatar: IMG.faculty2,
    campusIds: ["cy"],
    weeklyHours: 14,
    load: 68,
    classes: 4,
    next: "周四 13:30 朝阳校区",
    conflict: false,
  },
  {
    id: "t3",
    name: "江岚",
    role: "声乐主教",
    avatar: "https://i.pravatar.cc/160?img=45",
    campusIds: ["sh"],
    weeklyHours: 20,
    load: 88,
    classes: 6,
    next: "周四 10:00 徐汇校区",
    conflict: false,
  },
  {
    id: "t4",
    name: "宋其",
    role: "表演主教",
    avatar: "https://i.pravatar.cc/160?img=11",
    campusIds: ["hd"],
    weeklyHours: 12,
    load: 57,
    classes: 3,
    next: "周五 14:00 海淀校区",
    conflict: false,
  },
];

const seed = {
  role: "student",
  studentTab: "home",
  teacherTab: "home",
  adminTab: "schedule",
  messageOrigin: "home",
  messagesRead: { student: false, teacher: false, admin: false },
  teacherView: "today",
  feedbackFilter: "all",
  feedbackPanel: "pending",
  teacherSearch: "",
  studentDetail: null,
  sheet: null,
  orgMode: "single",
  selectedCampus: "cy",
  adminDay: "周四",
  selectedSessionId: "as1",
  campuses: [
    {
      id: "cy",
      name: "北京朝阳校区",
      shortName: "朝阳",
      city: "北京",
      rooms: 6,
      teachers: 6,
      students: 86,
      active: true,
    },
    {
      id: "hd",
      name: "北京海淀校区",
      shortName: "海淀",
      city: "北京",
      rooms: 4,
      teachers: 4,
      students: 62,
      active: true,
    },
    {
      id: "sh",
      name: "上海徐汇校区",
      shortName: "徐汇",
      city: "上海",
      rooms: 5,
      teachers: 5,
      students: 73,
      active: true,
    },
  ],
  students: [
    {
      id: "s1",
      name: "林一然",
      initials: "林",
      avatar: IMG.student,
      classId: "a",
      className: "2026届表演班A",
      major: "戏剧影视表演",
      target: "中央戏剧学院",
      stage: "省统考冲刺",
      remaining: 32,
      progress: 68,
      attendance: "present",
      pendingFeedback: 2,
      lastFeedback: "《雷雨》独白的气息层次已经有明显进步",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "训练中", value: 82 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 74 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "训练中", value: 66 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "已达标", value: 86 },
        { name: "即兴表演", note: "情境反应与交流感", status: "未掌握", value: 55 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "训练中", value: 61 },
      ],
    },
    {
      id: "s2",
      name: "江芷宁",
      initials: "江",
      avatar: "https://i.pravatar.cc/120?img=32",
      classId: "a",
      className: "2026届表演班A",
      major: "戏剧影视表演",
      target: "上海戏剧学院",
      stage: "省统考冲刺",
      remaining: 24,
      progress: 73,
      attendance: "late",
      pendingFeedback: 1,
      lastFeedback: "人物小传写得扎实，进入片段时还可以更快",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "已达标", value: 88 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 79 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "训练中", value: 70 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "训练中", value: 76 },
        { name: "即兴表演", note: "情境反应与交流感", status: "训练中", value: 68 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "未掌握", value: 52 },
      ],
    },
    {
      id: "s3",
      name: "陈照野",
      initials: "陈",
      avatar: "https://i.pravatar.cc/120?img=12",
      classId: "a",
      className: "2026届表演班A",
      major: "戏剧影视表演",
      target: "北京电影学院",
      stage: "省统考冲刺",
      remaining: 18,
      progress: 61,
      attendance: "present",
      pendingFeedback: 0,
      lastFeedback: "即兴交流有突破，注意别用表情替代真实反应",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "训练中", value: 69 },
        { name: "独白处理", note: "人物动机与潜台词", status: "未掌握", value: 54 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "训练中", value: 65 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "训练中", value: 72 },
        { name: "即兴表演", note: "情境反应与交流感", status: "训练中", value: 63 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "未掌握", value: 49 },
      ],
    },
    {
      id: "s4",
      name: "许知遥",
      initials: "许",
      avatar: "https://i.pravatar.cc/120?img=47",
      classId: "a",
      className: "2026届表演班A",
      major: "戏剧影视表演",
      target: "中国传媒大学",
      stage: "省统考冲刺",
      remaining: 27,
      progress: 77,
      attendance: "present",
      pendingFeedback: 0,
      lastFeedback: "声音条件很好，重点继续放在动作目的上",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "已达标", value: 85 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 78 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "训练中", value: 71 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "已达标", value: 91 },
        { name: "即兴表演", note: "情境反应与交流感", status: "训练中", value: 74 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "训练中", value: 64 },
      ],
    },
    {
      id: "s5",
      name: "沈听澜",
      initials: "沈",
      avatar: "https://i.pravatar.cc/120?img=45",
      classId: "a",
      className: "2026届表演班A",
      major: "戏剧影视表演",
      target: "南京艺术学院",
      stage: "省统考冲刺",
      remaining: 21,
      progress: 58,
      attendance: "leave",
      pendingFeedback: 0,
      lastFeedback: "已请假，补课重点安排独白片段复盘",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "训练中", value: 64 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 60 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "未掌握", value: 49 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "训练中", value: 67 },
        { name: "即兴表演", note: "情境反应与交流感", status: "训练中", value: 57 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "未掌握", value: 43 },
      ],
    },
    {
      id: "s6",
      name: "苏棠",
      initials: "苏",
      avatar: "https://i.pravatar.cc/120?img=5",
      classId: "a",
      className: "2026届表演班A",
      major: "戏剧影视表演",
      target: "浙江传媒学院",
      stage: "省统考冲刺",
      remaining: 35,
      progress: 71,
      attendance: "present",
      pendingFeedback: 1,
      lastFeedback: "情绪记忆调动很快，台词逻辑重音再收一点",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "训练中", value: 76 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 73 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "训练中", value: 68 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "训练中", value: 74 },
        { name: "即兴表演", note: "情境反应与交流感", status: "已达标", value: 85 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "训练中", value: 60 },
      ],
    },
    {
      id: "s7",
      name: "顾行舟",
      initials: "顾",
      avatar: "https://i.pravatar.cc/120?img=14",
      classId: "b",
      className: "2026届表演班B",
      major: "戏剧影视表演",
      target: "上海戏剧学院",
      stage: "校考备考",
      remaining: 16,
      progress: 66,
      attendance: "present",
      pendingFeedback: 0,
      lastFeedback: "镜头前状态比上周自然，近景动作还需减量",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "训练中", value: 75 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 71 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "训练中", value: 63 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "训练中", value: 70 },
        { name: "即兴表演", note: "情境反应与交流感", status: "训练中", value: 61 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "训练中", value: 60 },
      ],
    },
    {
      id: "s8",
      name: "周可心",
      initials: "周",
      avatar: "https://i.pravatar.cc/120?img=25",
      classId: "b",
      className: "2026届表演班B",
      major: "音乐剧表演",
      target: "北京舞蹈学院",
      stage: "校考备考",
      remaining: 22,
      progress: 81,
      attendance: "present",
      pendingFeedback: 0,
      lastFeedback: "舞蹈片段完成度高，唱段咬字可以更清楚",
      skills: [
        { name: "台词气息", note: "长句稳定性与情绪衔接", status: "训练中", value: 72 },
        { name: "独白处理", note: "人物动机与潜台词", status: "训练中", value: 69 },
        { name: "形体表达", note: "动作控制与舞台调度", status: "已达标", value: 89 },
        { name: "声乐音准", note: "音程与节奏稳定度", status: "已达标", value: 92 },
        { name: "即兴表演", note: "情境反应与交流感", status: "训练中", value: 79 },
        { name: "镜头感", note: "近景分寸与视线控制", status: "训练中", value: 75 },
      ],
    },
  ],
  classes: [
    {
      id: "a",
      campusId: "cy",
      time: "09:00",
      end: "11:30",
      title: "台词基础 · 人物独白",
      className: "2026届表演班A",
      room: "302排练厅",
      status: "进行中",
      studentIds: ["s1", "s2", "s3", "s4", "s5", "s6"],
      progress: 62,
    },
    {
      id: "b",
      campusId: "cy",
      time: "13:30",
      end: "15:30",
      title: "独白片段 · 校考方向",
      className: "2026届表演班B",
      room: "黑匣子剧场",
      status: "待上课",
      studentIds: ["s7", "s8"],
      progress: 48,
    },
    {
      id: "c",
      campusId: "cy",
      time: "16:00",
      end: "17:30",
      title: "校考模拟 · 冲刺小组",
      className: "冲刺小组",
      room: "镜头教室",
      status: "待上课",
      studentIds: ["s1", "s2", "s4", "s8"],
      progress: 36,
    },
  ],
  adminSessions: [
    {
      id: "as1",
      day: "周四",
      time: "09:00",
      end: "11:30",
      title: "台词基础 · 人物独白",
      teacher: "周予安",
      className: "2026届表演班A",
      room: "302排练厅",
      campusId: "cy",
      status: "已发布",
      students: 6,
      color: "green",
    },
    {
      id: "as2",
      day: "周四",
      time: "13:30",
      end: "15:30",
      title: "形体表达 · 动作组合",
      teacher: "林乔",
      className: "2026届表演班A",
      room: "形体教室2",
      campusId: "cy",
      status: "已发布",
      students: 6,
      color: "blue",
    },
    {
      id: "as3",
      day: "周四",
      time: "16:00",
      end: "17:30",
      title: "校考片段 · 冲刺小组",
      teacher: "周予安",
      className: "校考冲刺小组",
      room: "镜头教室",
      campusId: "cy",
      status: "草稿",
      students: 4,
      color: "amber",
    },
    {
      id: "as4",
      day: "周四",
      time: "16:00",
      end: "17:30",
      title: "台词提高班",
      teacher: "周予安",
      className: "2026届表演班B",
      room: "201排练厅",
      campusId: "hd",
      status: "已发布",
      students: 5,
      color: "coral",
    },
    {
      id: "as5",
      day: "周四",
      time: "10:00",
      end: "12:00",
      title: "音乐剧唱段",
      teacher: "江岚",
      className: "2027届音乐剧班",
      room: "声乐教室1",
      campusId: "sh",
      status: "已发布",
      students: 8,
      color: "blue",
    },
    {
      id: "as6",
      day: "周五",
      time: "09:30",
      end: "11:30",
      title: "独白片段 · 校考方向",
      teacher: "周予安",
      className: "2026届表演班B",
      room: "黑匣子剧场",
      campusId: "cy",
      status: "已发布",
      students: 2,
      color: "green",
    },
  ],
  changeRequests: [
    {
      id: "cr1",
      teacher: "周予安",
      campusId: "cy",
      className: "2026届表演班A",
      original: "11月14日 09:00-11:30",
      requested: "11月15日 14:00-16:30",
      reason: "参加校考教研会，需要调整课程时间。",
      status: "pending",
    },
    {
      id: "cr2",
      teacher: "江岚",
      campusId: "sh",
      className: "2027届音乐剧班",
      original: "11月15日 10:00-12:00",
      requested: "11月16日 10:00-12:00",
      reason: "校区声乐教室设备检修。",
      status: "pending",
    },
  ],
  studentSchedule: [
    { time: "09:00", end: "11:30", title: "台词基础 · 人物独白", room: "302排练厅", teacher: "周予安", status: "进行中" },
    { time: "14:30", end: "16:00", title: "独白片段 · 校考方向", room: "黑匣子剧场", teacher: "周予安", status: "待上课" },
    { time: "19:00", end: "20:30", title: "形体加练", room: "形体教室2", teacher: "林乔", status: "待上课" },
  ],
  faculty: [
    { name: "周予安", role: "台词主教", note: "中戏表演系 · 12年艺考教学", image: IMG.teacher },
    { name: "林乔", role: "形体主教", note: "北舞硕士 · 校考剧目指导", image: IMG.faculty2 },
  ],
  feedbacks: [
    {
      id: "f1",
      studentId: "s1",
      date: "11月10日",
      fullDate: "2026-11-10",
      title: "《雷雨》周萍独白",
      teacher: "周予安",
      duration: "01:27",
      summary:
        "这次情绪进入得更自然了，前两句不要急着把情绪推满。第二段说到“我恨我自己”时，把重音放在“恨”字之后停半拍，给观众一个理解人物犹豫的时间。最后一段可以再压低音量，用气息托住情绪。",
      tags: ["台词", "独白"],
    },
    {
      id: "f2",
      studentId: "s1",
      date: "11月7日",
      fullDate: "2026-11-07",
      title: "校考模拟 · 即兴交流",
      teacher: "周予安",
      duration: "02:00",
      summary:
        "无实物交流时不要一直找对方眼睛，可以先听，再给反应。你的真实感是优势，但动作稍微多了，近景镜头下容易抢戏。下一次练习把双手放在身体两侧，只允许一次主动动作。",
      tags: ["表演", "校考模拟"],
    },
    {
      id: "f3",
      studentId: "s1",
      date: "11月3日",
      fullDate: "2026-11-03",
      title: "声乐片段《心脏》",
      teacher: "林乔",
      duration: "01:14",
      summary:
        "整体音准稳定，副歌换声区还有一点紧。练习时先用哼鸣找通道，再逐渐加字。情绪不要提前进入，最后两句反而要有一种克制后的爆发。",
      tags: ["声乐", "片段"],
    },
    {
      id: "f4",
      studentId: "s2",
      date: "11月10日",
      fullDate: "2026-11-10",
      title: "人物小传与独白衔接",
      teacher: "周予安",
      duration: "01:42",
      summary: "小传写得很细，但进入片段前可以更快，不要让人物准备痕迹被看见。",
      tags: ["台词", "独白"],
    },
    {
      id: "f5",
      studentId: "s6",
      date: "11月9日",
      fullDate: "2026-11-09",
      title: "情绪记忆练习",
      teacher: "周予安",
      duration: "01:06",
      summary: "调动很快，逻辑重音再收一点，给情绪留出流动空间。",
      tags: ["表演"],
    },
  ],
  scores: [
    { month: "7月", label: "7月", province: 76, school: 74, rank: 24 },
    { month: "8月", label: "8月", province: 78, school: 76, rank: 21 },
    { month: "9月", label: "9月", province: 82, school: 79, rank: 17 },
    { month: "10月", label: "10月", province: 84, school: 81, rank: 13 },
    { month: "11月", label: "11月", province: 86, school: 84, rank: 9 },
  ],
  teacherScoreRanking: [
    { name: "周可心", score: 91 },
    { name: "许知遥", score: 88 },
    { name: "林一然", score: 86 },
    { name: "江芷宁", score: 84 },
    { name: "陈照野", score: 81 },
  ],
  leaves: [
    {
      id: "l1",
      studentId: "s2",
      date: "11月14日",
      reason: "发烧就医，需请假一天。",
      status: "pending",
      replacement: "",
    },
    {
      id: "l2",
      studentId: "s1",
      date: "11月6日",
      reason: "参加学校体检。",
      status: "approved",
      replacement: "11月8日 18:30 一对一补课",
    },
  ],
  notifications: {
    student: [
      {
        id: "n1",
        title: "周老师更新了训练点评",
        text: "《雷雨》周萍独白 · 建议重点练习第二段停顿",
        time: "10:18",
        unread: true,
        icon: "message-square",
      },
      {
        id: "n2",
        title: "考学节点提醒",
        text: "中央戏剧学院校考报名将于 11月15日 截止",
        time: "昨天",
        unread: true,
        icon: "calendar-clock",
      },
      {
        id: "n3",
        title: "请假审批已通过",
        text: "11月6日请假已通过，补课安排：11月8日 18:30",
        time: "11月6日",
        unread: false,
        icon: "calendar-check",
      },
      {
        id: "n4",
        title: "课时变动",
        text: "11月8日补课已完成，剩余课时扣除 1 节",
        time: "11月8日",
        unread: false,
        icon: "clock",
      },
    ],
    teacher: [
      {
        id: "t1",
        title: "今日课表待点名",
        text: "2026届表演班A · 台词基础 · 09:00",
        time: "刚刚",
        unread: true,
        icon: "clipboard-check",
      },
      {
        id: "t2",
        title: "新的请假申请",
        text: "江芷宁提交了 11月14日 的请假申请",
        time: "09:22",
        unread: true,
        icon: "calendar-plus",
      },
      {
        id: "t3",
        title: "模拟成绩待录入",
        text: "2026届表演班A 11月省统考模拟",
        time: "昨天",
        unread: false,
        icon: "chart-line",
      },
    ],
    admin: [
      {
        id: "a1",
        title: "跨校区排课冲突",
        text: "周予安老师周四 16:00 同时出现在朝阳与海淀校区",
        time: "刚刚",
        unread: true,
        icon: "circle-alert",
      },
      {
        id: "a2",
        title: "新的教师调课申请",
        text: "周予安申请调整 11月14日 的台词基础课程",
        time: "09:32",
        unread: true,
        icon: "calendar-clock",
      },
      {
        id: "a3",
        title: "本周课表待发布",
        text: "朝阳校区仍有 1 节课程处于草稿状态",
        time: "昨天",
        unread: false,
        icon: "calendar-days",
      },
    ],
  },
};

let state = clone(seed);
let toastTimer = null;

const appContent = document.getElementById("app-content");
const appHeader = document.getElementById("app-header");
const appTabbar = document.getElementById("app-tabbar");
const sheetLayer = document.getElementById("sheet-layer");
const bottomSheet = document.getElementById("bottom-sheet");
const toast = document.getElementById("toast");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function icon(name, extra = "") {
  return `<i data-lucide="${name}" ${extra} aria-hidden="true"></i>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function refreshIcons(root = document) {
  if (window.lucide) {
    window.lucide.createIcons({
      root,
      attrs: {
        "stroke-width": 1.8,
      },
    });
  }
}

function currentStudent() {
  return state.students.find((student) => student.id === "s1");
}

function studentById(id) {
  return state.students.find((student) => student.id === id);
}

function classById(id) {
  return state.classes.find((item) => item.id === id);
}

function campusById(id) {
  return state.campuses.find((campus) => campus.id === id);
}

function campusName(id) {
  return campusById(id)?.name || "未分配校区";
}

function visibleAdminSessions() {
  const campusFilter = state.orgMode === "multi" ? state.selectedCampus : "cy";
  return state.adminSessions.filter(
    (session) =>
      session.day === state.adminDay &&
      (campusFilter === "all" || session.campusId === campusFilter),
  );
}

function attendanceLabel(status) {
  return (
    {
      present: "到课",
      late: "迟到",
      leave: "请假",
      absent: "未到",
    }[status] || "未点名"
  );
}

function attendanceClass(status) {
  if (status === "late") return "status-pill status-pill--blue";
  if (status === "leave") return "status-pill status-pill--amber";
  if (status === "absent") return "status-pill status-pill--coral";
  return "status-pill";
}

function progressClass(status) {
  if (status === "已达标") return "status-pill";
  if (status === "未掌握") return "status-pill status-pill--coral";
  return "status-pill status-pill--amber";
}

function feedbackForStudent(studentId) {
  return state.feedbacks.filter((item) => item.studentId === studentId);
}

function unreadCount(role) {
  if (state.messagesRead[role]) return 0;
  return state.notifications[role].filter((item) => item.unread).length;
}

function formatClock(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function renderHeader() {
  const role = state.role;
  const unread = unreadCount(role);
  const roleLabel =
    role === "student"
      ? "学员成长中心"
      : role === "teacher"
        ? "教师工作台"
        : "排课与校区管理";
  appHeader.innerHTML = `
    <div class="brand-lockup">
      <div class="brand-mark">${icon("graduation-cap")}</div>
      <div class="brand-copy">
        <strong>逐光艺考</strong>
        <span>${roleLabel}</span>
      </div>
    </div>
    <div class="header-actions">
      <div class="role-switch" aria-label="切换体验角色">
        <button class="${role === "student" ? "is-active" : ""}" data-action="switch-role" data-role="student">学生</button>
        <button class="${role === "teacher" ? "is-active" : ""}" data-action="switch-role" data-role="teacher">教师</button>
        <button class="${role === "admin" ? "is-active" : ""}" data-action="switch-role" data-role="admin">教务</button>
      </div>
      <button class="icon-button" data-action="open-messages" aria-label="消息通知">
        ${icon("bell")}
        ${unread ? '<span class="notification-dot"></span>' : ""}
      </button>
    </div>
  `;
}

function renderTabs() {
  const role = state.role;
  const activeTab =
    role === "student"
      ? state.studentTab
      : role === "teacher"
        ? state.teacherTab
        : state.adminTab;
  const items =
    role === "student"
      ? [
          { id: "home", label: "首页", icon: "home" },
          { id: "feedback", label: "点评", icon: "message-square" },
          { id: "progress", label: "进度", icon: "trending-up" },
          { id: "profile", label: "我的", icon: "user" },
        ]
      : role === "teacher"
        ? [
          { id: "home", label: "工作台", icon: "layout-dashboard" },
          { id: "feedback", label: "点评", icon: "clapperboard" },
          { id: "students", label: "学生", icon: "users" },
          { id: "profile", label: "我的", icon: "user" },
        ]
        : [
            { id: "schedule", label: "排课", icon: "calendar-days" },
            { id: "teachers", label: "教师", icon: "users" },
            { id: "approvals", label: "审批", icon: "calendar-check" },
            { id: "settings", label: "设置", icon: "settings" },
          ];

  const pendingReviews = state.students.reduce(
    (sum, student) => sum + Number(student.pendingFeedback || 0),
    0,
  );
  const pendingChanges = state.changeRequests.filter(
    (request) => request.status === "pending",
  ).length;

  appTabbar.className = `tabbar tabbar--${role}`;
  appTabbar.innerHTML = items
    .map(
      (item) => `
        <button class="tab-button ${activeTab === item.id ? "is-active" : ""}" data-action="navigate" data-tab="${item.id}">
          ${icon(item.icon)}
          <span>${item.label}</span>
          ${item.id === "feedback" && pendingReviews ? `<span class="tab-button__badge">${pendingReviews}</span>` : ""}
          ${item.id === "approvals" && pendingChanges ? `<span class="tab-button__badge">${pendingChanges}</span>` : ""}
        </button>
      `,
    )
    .join("");
}

function renderApp({ keepScroll = true } = {}) {
  const previousScroll = keepScroll ? appContent.scrollTop : 0;
  document
    .querySelector(".phone-shell")
    ?.classList.toggle("admin-mode", state.role === "admin");
  renderHeader();
  renderContent();
  renderTabs();
  refreshIcons();
  appContent.scrollTop = previousScroll;
}

function renderContent() {
  const role = state.role;
  const tab =
    role === "student"
      ? state.studentTab
      : role === "teacher"
        ? state.teacherTab
        : state.adminTab;

  if (tab === "messages") {
    appContent.innerHTML = renderMessagesPage();
    return;
  }

  if (role === "student") {
    if (tab === "home") appContent.innerHTML = renderStudentHome();
    if (tab === "feedback") appContent.innerHTML = renderStudentFeedbackPage();
    if (tab === "progress") appContent.innerHTML = renderStudentProgressPage();
    if (tab === "profile") appContent.innerHTML = renderStudentProfilePage();
    return;
  }

  if (role === "admin") {
    if (tab === "schedule") appContent.innerHTML = renderAdminSchedule();
    if (tab === "teachers") appContent.innerHTML = renderAdminTeachers();
    if (tab === "approvals") appContent.innerHTML = renderAdminApprovals();
    if (tab === "settings") appContent.innerHTML = renderAdminSettings();
    return;
  }

  if (state.studentDetail) {
    appContent.innerHTML = renderTeacherStudentDetail();
    return;
  }

  if (tab === "home") appContent.innerHTML = renderTeacherHome();
  if (tab === "feedback") appContent.innerHTML = renderTeacherFeedbackPage();
  if (tab === "students") appContent.innerHTML = renderTeacherStudentsPage();
  if (tab === "profile") appContent.innerHTML = renderTeacherProfilePage();
}

function renderStudentHome() {
  const student = currentStudent();
  const latestFeedback = feedbackForStudent(student.id)[0];
  return `
    <section class="page">
      <div class="student-hero">
        <div class="student-hero__content">
          <div>
            <span class="hero-kicker"><span></span>${student.stage} · 第 3 阶段</span>
            <h1>${student.name}，稳住节奏</h1>
            <p>距离省统考还有 26 天 · 今日 3 节课</p>
          </div>
          <div class="hero-progress">
            <div class="hero-progress__copy">
              <strong>备考进度 ${student.progress}%</strong>
              <span>6 项技巧 · 2 项已达标</span>
            </div>
            <button class="hero-progress__meter" data-action="navigate" data-tab="progress" aria-label="查看备考进度">
              <div class="meter-row"><span>目标完成度</span><span>${student.progress}%</span></div>
              <div class="meter-track"><span style="width:${student.progress}%"></span></div>
            </button>
          </div>
        </div>
      </div>

      <div class="stat-strip" aria-label="学习和考勤概览">
        <div class="stat-item">
          <strong>${student.remaining}<small>节</small></strong>
          <span>剩余课时</span>
        </div>
        <div class="stat-item">
          <strong>12<small>/14</small></strong>
          <span>本月到课</span>
        </div>
        <div class="stat-item">
          <strong>9<small>名</small></strong>
          <span>校考排名</span>
        </div>
      </div>

      <section class="section">
        <div class="section-title">
          <div>
            <h2>今日课程</h2>
            <p>11月12日 · 周四</p>
          </div>
          <button class="text-link" data-action="open-messages">课表通知 ${icon("chevron-right")}</button>
        </div>
        <div class="schedule-list">
          ${state.studentSchedule
            .map(
              (item) => `
                <article class="schedule-row">
                  <div class="schedule-time">
                    <strong>${item.time}</strong>
                    <span>${item.end} 结束</span>
                  </div>
                  <div class="schedule-main">
                    <strong>${item.title}</strong>
                    <span>${icon("map-pin")}${item.room} · ${item.teacher}</span>
                  </div>
                  <span class="${item.status === "进行中" ? "status-pill status-pill--coral" : "status-pill status-pill--neutral"}">${item.status}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div>
            <h2>最近点评</h2>
            <p>来自 ${latestFeedback.teacher} 老师的训练反馈</p>
          </div>
          <button class="text-link" data-action="navigate" data-tab="feedback">全部 ${icon("chevron-right")}</button>
        </div>
        ${feedbackCard(latestFeedback)}
      </section>

      <section class="section">
        <div class="section-title">
          <div>
            <h2>考学节点</h2>
            <p>目标院校关键时间</p>
          </div>
          <span class="status-pill status-pill--amber">2 项临近</span>
        </div>
        <div class="exam-list">
          ${examRow("15", "11月", "中央戏剧学院 · 校考报名截止", "报名材料确认后提交", "剩 3 天")}
          ${examRow("28", "11月", "省统考 · 表演类初试", "携带准考证与身份证", "剩 16 天")}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div>
            <h2>校区师资</h2>
            <p>本周在校指导教师</p>
          </div>
        </div>
        <div class="faculty-scroll">
          ${state.faculty
            .map(
              (item) => `
                <article class="faculty-card">
                  <img src="${item.image}" alt="${item.name}" />
                  <div>
                    <strong>${item.name} · ${item.role}</strong>
                    <span>${item.note.split(" · ")[0]}</span>
                    <small>${item.note.split(" · ")[1] || ""}</small>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function examRow(day, month, title, note, countdown) {
  return `
    <article class="exam-row">
      <div class="exam-date"><strong>${day}</strong><span>${month}</span></div>
      <div class="exam-main"><strong>${title}</strong><span>${note}</span></div>
      <div class="countdown">${countdown}</div>
    </article>
  `;
}

function feedbackCard(feedback, { showFull = false } = {}) {
  if (!feedback) {
    return `
      <div class="empty-state">
        ${icon("message-square")}
        <strong>暂无点评</strong>
        <p>老师提交后，会第一时间同步到这里。</p>
      </div>
    `;
  }
  const student = studentById(feedback.studentId);
  return `
    <article class="feedback-card">
      <button class="feedback-preview" data-action="open-feedback-detail" data-id="${feedback.id}">
        <span class="feedback-preview__play">${icon("play")}</span>
        <span class="feedback-preview__meta">
          <span><strong>${feedback.title}</strong>${student ? student.name : ""} · ${feedback.date}</span>
          <span>${feedback.duration}</span>
        </span>
      </button>
      <div class="feedback-body">
        <div class="feedback-head">
          <strong>${feedback.tags.join(" · ")}</strong>
          <span>${feedback.date}</span>
        </div>
        <p>${showFull ? feedback.summary : feedback.summary}</p>
        <div class="feedback-footer">
          <span class="coach-inline">
            <img src="${IMG.teacher}" alt="${feedback.teacher}" />
            ${feedback.teacher} · 主教
          </span>
          <button class="text-link" data-action="open-feedback-detail" data-id="${feedback.id}">
            查看点评 ${icon("arrow-right")}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderStudentFeedbackPage() {
  let feedbacks = feedbackForStudent(currentStudent().id);
  if (state.feedbackFilter === "month") {
    feedbacks = feedbacks.filter((item) => item.fullDate.startsWith("2026-11"));
  }
  if (state.feedbackFilter === "video") {
    feedbacks = feedbacks.filter((item) => item.duration);
  }

  return `
    <section class="page">
      <div class="page-head">
        <div>
          <h1>训练点评</h1>
          <p>按时间查看老师上传的视频片段与文字反馈</p>
        </div>
        <span class="status-pill">${feedbackForStudent(currentStudent().id).length} 条</span>
      </div>

      <div class="chip-row">
        ${feedbackChip("all", "全部")}
        ${feedbackChip("month", "本月")}
        ${feedbackChip("video", "视频点评")}
      </div>

      <div class="feedback-list">
        ${feedbacks.length ? feedbacks.map((item) => feedbackCard(item, { showFull: true })).join("") : emptyState("message-square", "没有符合条件的点评", "切换筛选条件后再看看。")}
      </div>
    </section>
  `;
}

function feedbackChip(value, label) {
  return `<button class="chip ${state.feedbackFilter === value ? "is-active" : ""}" data-action="set-feedback-filter" data-value="${value}">${label}</button>`;
}

function renderTrendChart() {
  const values = state.scores;
  const width = 300;
  const height = 104;
  const padding = { left: 8, right: 8, top: 10, bottom: 10 };
  const min = 68;
  const max = 94;
  const x = (index) =>
    padding.left + (index * (width - padding.left - padding.right)) / (values.length - 1);
  const y = (value) =>
    padding.top + ((max - value) / (max - min)) * (height - padding.top - padding.bottom);
  const linePoints = values.map((item, index) => `${x(index)},${y(item.province)}`).join(" ");
  const schoolPoints = values.map((item, index) => `${x(index)},${y(item.school)}`).join(" ");
  const areaPoints = `${padding.left},${height - padding.bottom} ${linePoints} ${width - padding.right},${height - padding.bottom}`;

  return `
    <div class="trend-chart">
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="模拟考成绩趋势">
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8de3b7" stop-opacity="0.26" />
            <stop offset="100%" stop-color="#8de3b7" stop-opacity="0" />
          </linearGradient>
        </defs>
        <line x1="${padding.left}" y1="${y(80)}" x2="${width - padding.right}" y2="${y(80)}" stroke="rgba(255,255,255,.08)" stroke-width="1" />
        <line x1="${padding.left}" y1="${y(90)}" x2="${width - padding.right}" y2="${y(90)}" stroke="rgba(255,255,255,.08)" stroke-width="1" />
        <polygon points="${areaPoints}" fill="url(#trendFill)" />
        <polyline points="${schoolPoints}" fill="none" stroke="#ff9e8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
        <polyline points="${linePoints}" fill="none" stroke="#87e0b4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        ${values
          .map(
            (item, index) => `
              <circle cx="${x(index)}" cy="${y(item.province)}" r="3.4" fill="#0b5a42" stroke="#87e0b4" stroke-width="2" />
            `,
          )
          .join("")}
      </svg>
    </div>
    <div class="trend-labels">${values.map((item) => `<span>${item.label}</span>`).join("")}</div>
    <div class="chart-legend">
      <span><i></i>省统考模拟</span>
      <span><i class="coral"></i>校考模拟</span>
    </div>
  `;
}

function renderStudentProgressPage() {
  const student = currentStudent();
  const latest = state.scores[state.scores.length - 1];
  return `
    <section class="page">
      <div class="page-head">
        <div>
          <h1>备考进度</h1>
          <p>教师录入后实时更新，当前阶段：${student.stage}</p>
        </div>
      </div>

      <section class="progress-overview">
        <div class="progress-ring" style="--progress:${student.progress}%">
          <div class="progress-ring__value">
            <strong>${student.progress}<small>%</small></strong>
            <span>整体完成度</span>
          </div>
        </div>
        <div class="progress-copy">
          <h3>本周重点：独白处理</h3>
          <p>气息控制已趋于稳定，下一阶段需要把人物动机落实到每一句台词。</p>
          <div class="progress-mini-stats">
            <span><strong>2</strong>已达标</span>
            <span><strong>3</strong>训练中</span>
            <span><strong>1</strong>未掌握</span>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>模拟考趋势</h2><p>最近 5 次校内模拟</p></div>
          <span class="status-pill">校考第 ${latest.rank} 名</span>
        </div>
        <div class="score-hero">
          <div class="score-hero__top">
            <div>
              <span>11月省统考模拟</span>
              <strong>${latest.province}<small>分</small></strong>
            </div>
            <span class="score-hero__badge">较上月 +2</span>
          </div>
          ${renderTrendChart()}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>技巧项掌握</h2><p>状态由授课教师维护</p></div>
        </div>
        <div class="skill-list">
          ${student.skills
            .map(
              (skill) => `
                <article class="skill-row">
                  <div class="skill-main">
                    <strong>${skill.name}</strong>
                    <span>${skill.note}</span>
                    <div class="skill-track"><i style="width:${skill.value}%"></i></div>
                  </div>
                  <span class="${progressClass(skill.status)}">${skill.status}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function renderStudentProfilePage() {
  const student = currentStudent();
  const leaves = state.leaves.filter((item) => item.studentId === student.id);
  return `
    <section class="page">
      <section class="profile-cover">
        <div class="profile-cover__photo"><img src="${IMG.stage}" alt="" /></div>
        <div class="profile-cover__content">
          <div class="profile-person">
            <img src="${student.avatar}" alt="${student.name}" />
            <div>
              <h2>${student.name}</h2>
              <p>${student.className} · 学号 ZG260108</p>
            </div>
          </div>
          <div class="profile-meta">
            <span>${student.major}</span>
            <span>${student.stage}</span>
            <span>剩余 ${student.remaining} 课时</span>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>备考档案</h2><p>档案信息由教务老师维护</p></div>
          <span class="status-pill status-pill--neutral">不可编辑</span>
        </div>
        <div class="detail-panel">
          ${detailRow("目标院校", student.target)}
          ${detailRow("专业方向", student.major)}
          ${detailRow("所属班级", student.className)}
          ${detailRow("当前阶段", student.stage)}
          ${detailRow("最近点评", student.lastFeedback)}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>自考勤与请假</h2><p>本月记录</p></div>
          <button class="text-link" data-action="open-leave">申请请假 ${icon("chevron-right")}</button>
        </div>
        <div class="stat-strip">
          <div class="stat-item"><strong>12<small>次</small></strong><span>到课</span></div>
          <div class="stat-item"><strong>1<small>次</small></strong><span>迟到</span></div>
          <div class="stat-item"><strong>1<small>次</small></strong><span>请假</span></div>
        </div>
        <div class="section--tight action-list">
          ${leaves.length ? leaves.map(leaveSummary).join("") : emptyState("calendar", "请假记录为空", "提交后会在这里显示审批状态。")}
        </div>
      </section>

      <section class="section">
        <div class="section-title"><div><h2>考学节点</h2><p>目标院校报名与考试时间</p></div></div>
        <div class="exam-list">
          ${examRow("15", "11月", "中央戏剧学院 · 校考报名截止", "及时完成材料确认", "剩 3 天")}
          ${examRow("28", "11月", "省统考 · 表演类初试", "09:00 开始入场", "剩 16 天")}
        </div>
      </section>

      <section class="section">
        <div class="detail-panel">
          <button class="list-action" data-action="open-messages">
            <span class="list-action__icon">${icon("bell")}</span>
            <span><strong>消息通知</strong><span>课消变动、点评更新与审批结果</span></span>
            ${icon("chevron-right")}
          </button>
          <button class="list-action" data-action="contact-teacher">
            <span class="list-action__icon">${icon("message-circle")}</span>
            <span><strong>联系班主任</strong><span>工作日 09:00 - 20:00</span></span>
            ${icon("chevron-right")}
          </button>
        </div>
      </section>
    </section>
  `;
}

function detailRow(label, value) {
  return `<div class="detail-row"><span>${label}</span><strong>${value}</strong></div>`;
}

function leaveSummary(leave) {
  const statusMap = {
    pending: ["待审批", "status-pill status-pill--amber"],
    approved: ["已通过", "status-pill"],
    rejected: ["已驳回", "status-pill status-pill--coral"],
  };
  const [label, className] = statusMap[leave.status];
  return `
    <article class="leave-summary">
      <div class="leave-summary__top">
        <strong>${leave.date} · 请假</strong>
        <span class="${className}">${label}</span>
      </div>
      <p>${escapeHtml(leave.reason)}</p>
      ${leave.replacement ? `<p>补课安排：${escapeHtml(leave.replacement)}</p>` : ""}
    </article>
  `;
}

function renderMessagesPage() {
  const role = state.role;
  const messages = state.notifications[role];
  return `
    <section class="page">
      <div class="detail-nav">
        <button class="icon-button icon-button--quiet" data-action="back-from-messages" aria-label="返回">
          ${icon("chevron-left")}
        </button>
        <strong>消息通知</strong>
      </div>
      <div class="notice-list">
        ${messages
          .map(
            (item) => `
              <button class="message-row ${item.unread ? "is-unread" : ""}" data-action="open-message" data-id="${item.id}">
                <span class="message-row__icon">${icon(item.icon)}</span>
                <span class="message-row__main">
                  <strong>${item.title}</strong>
                  <p>${item.text}</p>
                </span>
                <span class="message-row__time">${item.time}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function getScheduleConflicts() {
  if (state.orgMode === "single") return [];
  const sessions = state.adminSessions.filter(
    (session) => session.status !== "已取消",
  );
  const conflicts = [];
  sessions.forEach((session) => {
    const match = sessions.find(
      (other) =>
        other.id !== session.id &&
        other.teacher === session.teacher &&
        other.day === session.day &&
        other.time === session.time,
    );
    if (match && !conflicts.some((item) => item.id === session.id)) {
      conflicts.push(session);
    }
  });
  return conflicts;
}

function adminShell(content) {
  const navItems = [
    { id: "schedule", label: "排课管理", icon: "calendar-days" },
    { id: "teachers", label: "教师资源", icon: "users" },
    { id: "approvals", label: "调课审批", icon: "calendar-check" },
    { id: "settings", label: "组织设置", icon: "settings" },
  ];
  const scope =
    state.orgMode === "multi"
      ? state.selectedCampus === "all"
        ? "全部校区"
        : campusName(state.selectedCampus)
      : "北京朝阳校区";
  return `
    <section class="admin-page">
      <aside class="admin-sidebar">
        <div class="admin-org">
          <span class="admin-org__mark">${icon("school")}</span>
          <div>
            <strong>逐光艺考</strong>
            <span>${state.orgMode === "multi" ? `${state.campuses.length} 个校区协同` : "单校区运营"}</span>
          </div>
        </div>
        <nav class="admin-nav" aria-label="教务后台导航">
          ${navItems
            .map(
              (item) => `
                <button class="${state.adminTab === item.id ? "is-active" : ""}" data-action="admin-tab" data-tab="${item.id}">
                  ${icon(item.icon)}
                  <span>${item.label}</span>
                  ${item.id === "approvals" && pendingChangeCount() ? `<b>${pendingChangeCount()}</b>` : ""}
                </button>
              `,
            )
            .join("")}
        </nav>
        <div class="admin-scope-card">
          <span>当前数据范围</span>
          <strong>${scope}</strong>
          <small>${state.orgMode === "multi" ? "支持跨校区冲突校验" : "单校区默认权限"}</small>
        </div>
        <button class="admin-back-mobile" data-action="switch-role" data-role="teacher">
          ${icon("arrow-left")}返回教师端
        </button>
      </aside>
      <main class="admin-main">${content}</main>
    </section>
  `;
}

function pendingChangeCount() {
  return state.changeRequests.filter((request) => request.status === "pending")
    .length;
}

function renderOrgModeSwitch() {
  return `
    <div class="org-mode-switch" aria-label="运营模式">
      <button class="${state.orgMode === "single" ? "is-active" : ""}" data-action="set-org-mode" data-value="single">单校区</button>
      <button class="${state.orgMode === "multi" ? "is-active" : ""}" data-action="set-org-mode" data-value="multi">多校区</button>
    </div>
  `;
}

function renderCampusFilters() {
  if (state.orgMode !== "multi") return "";
  return `
    <div class="admin-campus-filters">
      <button class="${state.selectedCampus === "all" ? "is-active" : ""}" data-action="set-campus" data-campus="all">全部校区</button>
      ${state.campuses
        .map(
          (campus) => `
            <button class="${state.selectedCampus === campus.id ? "is-active" : ""}" data-action="set-campus" data-campus="${campus.id}">
              ${campus.shortName}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAdminSchedule() {
  const sessions = visibleAdminSessions().sort((a, b) =>
    a.time.localeCompare(b.time),
  );
  const selected =
    sessions.find((session) => session.id === state.selectedSessionId) ||
    sessions[0];
  const conflicts = getScheduleConflicts();
  const published = sessions.filter((item) => item.status === "已发布").length;
  const draft = sessions.filter((item) => item.status === "草稿").length;
  const teacherHours = sessions.reduce(
    (sum, item) =>
      sum +
      (Number(item.end.slice(0, 2)) * 60 +
        Number(item.end.slice(3)) -
        Number(item.time.slice(0, 2)) * 60 -
        Number(item.time.slice(3))) /
        60,
    0,
  );
  return adminShell(`
    <div class="admin-toolbar">
      <div class="admin-title">
        <span>ORGANIZATION / SCHEDULING</span>
        <h1>排课管理</h1>
        <p>统一管理课程、教师、教室与学生时间，发布后同步双端。</p>
      </div>
      <div class="admin-toolbar__actions">
        ${renderOrgModeSwitch()}
        <button class="primary-button" data-action="open-admin-schedule">${icon("plus")}新建排课</button>
      </div>
    </div>
    ${renderCampusFilters()}
    <div class="admin-kpi-grid">
      <article class="admin-kpi">
        <span>${state.adminDay}课程</span>
        <strong>${sessions.length}<small>节</small></strong>
        <em>${published} 已发布 · ${draft} 草稿</em>
      </article>
      <article class="admin-kpi">
        <span>排课课时</span>
        <strong>${teacherHours.toFixed(1)}<small>h</small></strong>
        <em>${state.orgMode === "multi" ? "当前筛选范围" : "单校区统计"}</em>
      </article>
      <article class="admin-kpi ${conflicts.length ? "admin-kpi--alert" : ""}">
        <span>冲突预警</span>
        <strong>${conflicts.length}<small>项</small></strong>
        <em>${conflicts.length ? "需要发布前处理" : "当前无冲突"}</em>
      </article>
      <article class="admin-kpi">
        <span>${state.orgMode === "multi" ? "校区同步" : "当前模式"}</span>
        <strong>${state.orgMode === "multi" ? "3" : "1"}<small>${state.orgMode === "multi" ? "区" : "区"}</small></strong>
        <em>${state.orgMode === "multi" ? "总部课表可汇总" : "隐藏复杂组织层级"}</em>
      </article>
    </div>
    <div class="admin-week-strip">
      ${["周一", "周二", "周三", "周四", "周五"]
        .map(
          (day, index) => `
            <button class="${state.adminDay === day ? "is-active" : ""}" data-action="set-admin-day" data-day="${day}">
              <span>${day}</span><strong>${9 + index >= 13 ? 13 : 9 + index}</strong>
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="schedule-layout">
      <section class="admin-panel admin-schedule-board">
        <div class="admin-panel__head">
          <div><strong>${state.adminDay}课表</strong><span>按开始时间排序</span></div>
          <button class="mini-button" data-action="admin-auto-check">${icon("sparkles")}冲突检查</button>
        </div>
        <div class="admin-session-list">
          ${
            sessions.length
              ? sessions
                  .map(
                    (session) => `
                      <button class="admin-session admin-session--${session.color} ${selected?.id === session.id ? "is-selected" : ""}" data-action="select-admin-session" data-id="${session.id}">
                        <span class="admin-session__time"><strong>${session.time}</strong><span>${session.end}</span></span>
                        <span class="admin-session__body">
                          <strong>${session.title}</strong>
                          <span>${session.teacher} · ${session.className}</span>
                          <small>${icon("map-pin")}${session.room}${state.orgMode === "multi" ? ` · ${campusName(session.campusId)}` : ""}</small>
                        </span>
                        <span class="${session.status === "已发布" ? "status-pill" : "status-pill status-pill--amber"}">${session.status}</span>
                      </button>
                    `,
                  )
                  .join("")
              : emptyState("calendar", "当前范围没有课程", "新建排课后会显示在这里。")
          }
        </div>
      </section>
      <aside class="admin-detail">
        ${
          selected
            ? `
              <section class="admin-panel admin-session-detail">
                <span class="admin-panel__eyebrow">SELECTED SESSION</span>
                <h2>${selected.title}</h2>
                <span class="${selected.status === "已发布" ? "status-pill" : "status-pill status-pill--amber"}">${selected.status}</span>
                <div class="admin-detail__rows">
                  ${detailRow("上课时间", `${selected.day} ${selected.time}-${selected.end}`)}
                  ${detailRow("授课教师", selected.teacher)}
                  ${detailRow("所属班级", selected.className)}
                  ${detailRow("教室", selected.room)}
                  ${detailRow("校区", campusName(selected.campusId))}
                  ${detailRow("学生人数", `${selected.students} 人`)}
                </div>
                <div class="admin-detail__actions">
                  <button class="secondary-button" data-action="admin-edit-session" data-id="${selected.id}">${icon("pen-line")}调整</button>
                  <button class="primary-button" data-action="admin-publish-day">${icon("send")}发布课表</button>
                </div>
              </section>
            `
            : ""
        }
        ${
          conflicts.length
            ? `
              <section class="admin-conflict">
                <span class="admin-conflict__icon">${icon("circle-alert")}</span>
                <div>
                  <strong>${state.adminSessions.find((item) => item.id !== conflicts[0].id && item.teacher === conflicts[0].teacher && item.day === conflicts[0].day && item.time === conflicts[0].time)?.campusId !== conflicts[0].campusId ? "跨校区教师冲突" : "教师时间冲突"}</strong>
                  <p>${conflicts[0].teacher}老师在 ${conflicts[0].day} ${conflicts[0].time} 同时被安排了两节课，请先调整。</p>
                  <button class="text-link" data-action="admin-auto-check">查看处理建议 ${icon("arrow-right")}</button>
                </div>
              </section>
            `
            : `
              <section class="admin-conflict admin-conflict--ok">
                <span class="admin-conflict__icon">${icon("badge-check")}</span>
                <div><strong>时间资源检查通过</strong><p>教师、学生与教室当前无冲突。</p></div>
              </section>
            `
        }
        ${
          state.orgMode === "multi"
            ? `
              <section class="admin-panel admin-campus-load">
                <div class="admin-panel__head"><div><strong>校区负载</strong><span>今日课程分布</span></div></div>
                ${state.campuses
                  .map(
                    (campus) => `
                      <div class="load-row">
                        <span>${campus.shortName}</span>
                        <div><i style="width:${campus.students / 1.2}%"></i></div>
                        <strong>${campus.students}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </section>
            `
            : ""
        }
      </aside>
    </div>
  `);
}

function renderAdminTeachers() {
  const campusFilter = state.selectedCampus;
  const teachers = teacherResources.filter((teacher) => {
    if (state.orgMode === "single") return teacher.campusIds.includes("cy");
    return (
      campusFilter === "all" || teacher.campusIds.includes(campusFilter)
    );
  });
  return adminShell(`
    <div class="admin-toolbar">
      <div class="admin-title">
        <span>RESOURCE / TEACHERS</span>
        <h1>教师资源</h1>
        <p>查看教师可排时间、跨校区归属和本周课时负载。</p>
      </div>
      <div class="admin-toolbar__actions">
        ${renderOrgModeSwitch()}
        <button class="primary-button" data-action="teacher-availability">${icon("calendar-plus")}录入可排时间</button>
      </div>
    </div>
    ${renderCampusFilters()}
    <div class="admin-teacher-grid">
      ${teachers
        .map(
          (teacher) => `
            <article class="admin-teacher-card">
              <div class="admin-teacher-card__head">
                <img src="${teacher.avatar}" alt="${teacher.name}" />
                <div><strong>${teacher.name}</strong><span>${teacher.role} · ${teacher.classes} 个班级</span></div>
                ${teacher.conflict ? '<span class="status-pill status-pill--coral">有冲突</span>' : '<span class="status-pill">可排课</span>'}
              </div>
              <div class="admin-teacher-card__campus">
                ${teacher.campusIds.map((id) => `<span>${campusName(id)}</span>`).join("")}
              </div>
              <div class="admin-load-line">
                <span>本周课时 ${teacher.weeklyHours}h</span>
                <strong>${teacher.load}%</strong>
              </div>
              <div class="admin-load-track"><i style="width:${teacher.load}%"></i></div>
              <p>${icon("clock")}${teacher.next}</p>
              <div class="admin-teacher-card__actions">
                <button class="mini-button" data-action="teacher-availability">${icon("calendar")}可排时间</button>
                <button class="mini-button" data-action="admin-auto-check">${icon("search")}查冲突</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    ${
      state.orgMode === "multi"
        ? `
          <section class="admin-panel admin-multi-note">
            <span class="admin-conflict__icon">${icon("route")}</span>
            <div><strong>跨校区教师优先使用统一日历</strong><p>教师在不同校区的课程共享同一冲突池，调课时同时检查全部校区。</p></div>
          </section>
        `
        : ""
    }
  `);
}

function renderAdminApprovals() {
  const requests = state.changeRequests;
  return adminShell(`
    <div class="admin-toolbar">
      <div class="admin-title">
        <span>WORKFLOW / APPROVALS</span>
        <h1>调课审批</h1>
        <p>教师提交申请，教务确认后生成新版本课表并通知学生。</p>
      </div>
      <div class="admin-toolbar__actions">
        <span class="status-pill status-pill--amber">${pendingChangeCount()} 待处理</span>
      </div>
    </div>
    <div class="admin-approval-layout">
      <div class="admin-approval-list">
        ${
          requests.length
            ? requests
                .map((request) => {
                  const statusMap = {
                    pending: ["待审批", "status-pill status-pill--amber"],
                    approved: ["已通过", "status-pill"],
                    rejected: ["已驳回", "status-pill status-pill--coral"],
                  };
                  const [label, className] = statusMap[request.status];
                  return `
                    <article class="admin-approval-card">
                      <div class="admin-approval-card__head">
                        <div>
                          <strong>${request.teacher} · ${request.className}</strong>
                          <span>${campusName(request.campusId)}</span>
                        </div>
                        <span class="${className}">${label}</span>
                      </div>
                      <div class="admin-change-times">
                        <div><span>原时间</span><strong>${request.original}</strong></div>
                        ${icon("arrow-right")}
                        <div><span>申请调整</span><strong>${request.requested}</strong></div>
                      </div>
                      <p class="approval-reason">${escapeHtml(request.reason)}</p>
                      ${
                        request.status === "pending"
                          ? `
                            <div class="approval-actions">
                              <button class="danger-button" data-action="admin-reject-change" data-id="${request.id}">驳回</button>
                              <button class="primary-button" data-action="admin-approve-change" data-id="${request.id}">${icon("check")}通过并发布</button>
                            </div>
                          `
                          : ""
                      }
                    </article>
                  `;
                })
                .join("")
            : emptyState("calendar-check", "暂无调课申请", "新的教师申请会出现在这里。")
        }
      </div>
      <aside class="admin-panel admin-approval-rule">
        <span class="admin-panel__eyebrow">APPROVAL POLICY</span>
        <h2>当前审批规则</h2>
        <div class="admin-detail__rows">
          ${detailRow("单校区调课", "教务一级审批")}
          ${detailRow("跨校区调课", "区域负责人确认")}
          ${detailRow("冲突处理", "发布前强制校验")}
          ${detailRow("学生通知", "发布后自动发送")}
        </div>
        <button class="secondary-button" data-action="admin-tab" data-tab="settings">${icon("settings")}调整规则</button>
      </aside>
    </div>
  `);
}

function renderAdminSettings() {
  return adminShell(`
    <div class="admin-toolbar">
      <div class="admin-title">
        <span>ORGANIZATION / CONFIGURATION</span>
        <h1>组织设置</h1>
        <p>同一套产品通过运营模式适配单校区与多校区机构。</p>
      </div>
    </div>
    <div class="admin-settings-grid">
      <section class="admin-panel admin-mode-card">
        <span class="admin-panel__eyebrow">OPERATING MODEL</span>
        <h2>运营模式</h2>
        <p>切换后只改变产品复杂度，不改变底层数据结构。</p>
        <div class="mode-option-grid">
          <button class="${state.orgMode === "single" ? "is-active" : ""}" data-action="set-org-mode" data-value="single">
            <span class="admin-mode-icon">${icon("school")}</span>
            <strong>单校区模式</strong>
            <small>默认一个校区，隐藏跨校区管理</small>
          </button>
          <button class="${state.orgMode === "multi" ? "is-active" : ""}" data-action="set-org-mode" data-value="multi">
            <span class="admin-mode-icon">${icon("building-2")}</span>
            <strong>多校区模式</strong>
            <small>校区权限、统一日历与汇总数据</small>
          </button>
        </div>
      </section>
      <section class="admin-panel">
        <div class="admin-panel__head"><div><strong>校区与数据范围</strong><span>${state.orgMode === "multi" ? "总部 + 分校两级管理" : "系统已自动创建默认校区"}</span></div></div>
        <div class="campus-setting-list">
          ${state.campuses
            .map(
              (campus, index) => `
                <div class="campus-setting-row ${state.orgMode === "single" && index > 0 ? "is-muted" : ""}">
                  <span class="campus-setting-row__mark">${campus.city.slice(0, 1)}</span>
                  <div><strong>${campus.name}</strong><span>${campus.teachers} 名教师 · ${campus.students} 名学生</span></div>
                  <em>${state.orgMode === "single" && index > 0 ? "未启用" : "运行中"}</em>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="admin-panel">
        <div class="admin-panel__head"><div><strong>角色与数据权限</strong><span>角色决定动作，数据范围决定可见内容</span></div></div>
        <div class="permission-table">
          <div class="permission-row permission-row--head"><span>角色</span><span>数据范围</span><span>排课权限</span></div>
          ${permissionRow("总部教务", "全部校区", "查看与跨校区调整")}
          ${permissionRow("校区教务", "所属校区", "排课与发布")}
          ${permissionRow("授课教师", "本人班级", "查看与申请调课")}
          ${permissionRow("校长", "全部校区", "审批与经营查看")}
        </div>
      </section>
      <section class="admin-panel">
        <div class="admin-panel__head"><div><strong>共享规则</strong><span>总部模板可下发，校区按需覆盖</span></div></div>
        <div class="config-list">
          ${configRow("课程模板", "总部统一维护", "已启用")}
          ${configRow("审批策略", state.orgMode === "multi" ? "跨校区二次确认" : "单校区一级审批", "可配置")}
          ${configRow("学生通知", "课表发布后自动发送", "已启用")}
          ${configRow("课消规则", "点名后自动扣课时", "已启用")}
        </div>
      </section>
    </div>
  `);
}

function permissionRow(role, scope, action) {
  return `<div class="permission-row"><span>${role}</span><span>${scope}</span><span>${action}</span></div>`;
}

function configRow(label, value, status) {
  return `<div class="config-row"><span>${label}</span><strong>${value}</strong><em>${status}</em></div>`;
}

function renderTeacherHome() {
  const currentClass = state.classes[0];
  return `
    <section class="page">
      <div class="welcome-line">
        <div>
          <h1>早上好，周老师</h1>
          <p>今天有 3 节课，${currentClass.className} 正在上课</p>
        </div>
        <div class="date-block">
          <strong>12</strong>
          <span>11月 · 周四</span>
        </div>
      </div>

      <div class="section-title">
        <div><h2>今日课表</h2><p>点名、点评与课堂进度</p></div>
        <div class="teacher-schedule-controls">
          <button class="mini-button" data-action="open-change-request" data-class-id="${currentClass.id}">${icon("calendar-plus")}调课</button>
          <div class="view-switch">
            <button class="${state.teacherView === "today" ? "is-active" : ""}" data-action="set-teacher-view" data-value="today">今日</button>
            <button class="${state.teacherView === "week" ? "is-active" : ""}" data-action="set-teacher-view" data-value="week">本周</button>
          </div>
        </div>
      </div>

      ${state.teacherView === "week" ? renderTeacherWeek() : `<div class="schedule-list">${state.classes.map(teacherClassCard).join("")}</div>`}

      <section class="section">
        <div class="section-title">
          <div><h2>快捷操作</h2><p>今天最常用的教学动作</p></div>
        </div>
        <div class="quick-grid">
          <button class="quick-action" data-action="open-attendance" data-class-id="${currentClass.id}">
            <span class="quick-action__icon">${icon("clipboard-check")}</span>
            <span>课堂点名</span>
          </button>
          <button class="quick-action" data-action="open-feedback">
            <span class="quick-action__icon">${icon("clapperboard")}</span>
            <span>录制点评</span>
          </button>
          <button class="quick-action" data-action="open-progress">
            <span class="quick-action__icon">${icon("list-checks")}</span>
            <span>进度录入</span>
          </button>
          <button class="quick-action" data-action="open-score">
            <span class="quick-action__icon">${icon("chart-line")}</span>
            <span>成绩录入</span>
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>待办提醒</h2><p>${pendingTeacherTodoCount()} 项需要处理</p></div>
        </div>
        <div class="todo-list">
          <button class="todo-item" data-action="open-attendance" data-class-id="${currentClass.id}">
            <span class="todo-item__dot"></span>
            <span><strong>${currentClass.className} 尚未完成点名</strong><span>09:00 · 台词基础 · 302排练厅</span></span>
            ${icon("chevron-right")}
          </button>
          <button class="todo-item" data-action="open-approvals">
            <span class="todo-item__dot"></span>
            <span><strong>${pendingLeaveCount()} 份请假申请待审批</strong><span>通过后需填写补课安排</span></span>
            ${icon("chevron-right")}
          </button>
          <button class="todo-item" data-action="open-score">
            <span class="todo-item__dot"></span>
            <span><strong>11月模拟成绩待录入</strong><span>录入后自动生成班级排名</span></span>
            ${icon("chevron-right")}
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>班级备考概览</h2><p>2026届表演班A</p></div>
          <button class="text-link" data-action="navigate" data-tab="students">学生列表 ${icon("chevron-right")}</button>
        </div>
        <div class="progress-overview">
          <div class="progress-ring" style="--progress:68%">
            <div class="progress-ring__value"><strong>68<small>%</small></strong><span>班级均值</span></div>
          </div>
          <div class="progress-copy">
            <h3>台词项保持领先</h3>
            <p>即兴表演与镜头感是本周主要短板，建议增加近景片段训练。</p>
            <div class="progress-mini-stats">
              <span><strong>6</strong>在班学生</span>
              <span><strong>3</strong>待点评</span>
              <span><strong>1</strong>请假</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  `;
}

function pendingLeaveCount() {
  return state.leaves.filter((leave) => leave.status === "pending").length;
}

function pendingTeacherTodoCount() {
  return 2 + pendingLeaveCount();
}

function renderTeacherWeek() {
  const days = [
    ["一", "09"],
    ["二", "10"],
    ["三", "11"],
    ["四", "12"],
    ["五", "13"],
  ];
  return `
    <div class="week-grid">
      ${days
        .map(
          ([label, date]) => `
            <button class="week-day ${date === "12" ? "is-active" : ""}" data-action="week-day">
              <strong>${date}</strong><span>周${label}</span>
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="schedule-list">
      ${state.classes.map(teacherClassCard).join("")}
    </div>
  `;
}

function teacherClassCard(item) {
  const students = item.studentIds.map(studentById).filter(Boolean);
  const isNow = item.status === "进行中";
  const attended = students.filter((student) => ["present", "late"].includes(student.attendance)).length;
  return `
    <article class="teacher-class ${isNow ? "teacher-class--now" : ""}">
      <div class="teacher-class__top">
        <div>
          <span class="class-time ${isNow ? "class-time--now" : ""}">${item.time} - ${item.end} ${isNow ? "· 进行中" : ""}</span>
          <h3>${item.title}</h3>
          <p>
            <span>${icon("users")}${item.className}</span>
            <span>${icon("map-pin")}${item.room}</span>
            ${state.orgMode === "multi" ? `<span>${icon("building-2")}${campusName(item.campusId)}</span>` : ""}
          </p>
        </div>
        <span class="${isNow ? "status-pill status-pill--coral" : "status-pill status-pill--neutral"}">${attended}/${students.length} 已点</span>
      </div>
      <div class="student-pips">
        <span class="student-pips__stack">
          ${students.slice(0, 5).map((student) => `<span class="student-pip">${student.initials}</span>`).join("")}
        </span>
        <span class="student-pips__count">${students.length} 名学生 · ${item.progress}% 进度</span>
      </div>
      <div class="class-actions">
        <div class="progress-inline">
          <div class="progress-inline__label"><span>课堂进度</span><strong>${item.progress}%</strong></div>
          <div class="progress-inline__track"><span style="width:${item.progress}%"></span></div>
        </div>
        <button class="mini-button mini-button--green" data-action="open-attendance" data-class-id="${item.id}">
          ${icon("clipboard-check")}点名
        </button>
      </div>
    </article>
  `;
}

function renderTeacherFeedbackPage() {
  const pendingStudents = state.students.filter((student) => student.pendingFeedback > 0);
  const feedbacks = state.pendingFeedbackList || state.feedbacks.slice(0, 4);
  return `
    <section class="page">
      <div class="page-head">
        <div><h1>训练点评</h1><p>选择学生，录制片段并提交课堂反馈</p></div>
        <span class="pending-count">${pendingStudents.reduce((sum, student) => sum + student.pendingFeedback, 0)}</span>
      </div>

      <div class="compose-banner">
        <div class="compose-banner__copy">
          <strong>记录一个训练瞬间</strong>
          <p>视频限制 1-2 分钟，可直接录制或从手机上传。</p>
        </div>
        <button class="primary-button" data-action="open-feedback">${icon("video")}开始点评</button>
      </div>

      <section class="section">
        <div class="section-title">
          <div><h2>待点评学生</h2><p>按最近课程排序</p></div>
        </div>
        <div class="student-quick-list">
          ${pendingStudents
            .map(
              (student) => `
                <button class="student-quick" data-action="open-feedback" data-student-id="${student.id}">
                  <img src="${student.avatar}" alt="${student.name}" />
                  <strong>${student.name}</strong>
                  <span><b class="pending-count">${student.pendingFeedback}</b> 待点评</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>最近已点评</h2><p>本周课堂反馈记录</p></div>
        </div>
        <div class="feedback-list">
          ${feedbacks.map((item) => feedbackCard(item)).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderTeacherStudentsPage() {
  const query = state.teacherSearch.trim().toLowerCase();
  const students = state.students.filter((student) => {
    if (!query) return true;
    return `${student.name} ${student.className} ${student.target}`.toLowerCase().includes(query);
  });
  return `
    <section class="page">
      <div class="page-head">
        <div><h1>学生列表</h1><p>查看档案、进度、课时与最近点评</p></div>
        <span class="status-pill">${state.students.length} 人</span>
      </div>
      <label class="search-box">
        ${icon("search")}
        <input id="teacher-search" type="search" value="${escapeHtml(state.teacherSearch)}" placeholder="搜索姓名、班级或目标院校" autocomplete="off" />
      </label>
      <div class="student-list">
        ${
          students.length
            ? students
                .map(
                  (student) => `
                    <button class="student-row" data-action="open-student" data-id="${student.id}">
                      <img src="${student.avatar}" alt="${student.name}" />
                      <span class="student-row__main">
                        <strong>${student.name}<span class="${progressClass(student.skills.find((skill) => skill.status === "未掌握") ? "未掌握" : "训练中")}">${student.stage}</span></strong>
                        <span>${student.className} · ${student.target}</span>
                        <span>最近点评：${student.lastFeedback}</span>
                      </span>
                      <span class="student-row__side">
                        <strong>${student.progress}%</strong>
                        <span>剩 ${student.remaining} 课时</span>
                      </span>
                    </button>
                  `,
                )
                .join("")
            : emptyState("search", "没有找到学生", "尝试输入其他姓名或院校。")
        }
      </div>
    </section>
  `;
}

function renderTeacherStudentDetail() {
  const student = studentById(state.studentDetail);
  if (!student) return "";
  const feedbacks = feedbackForStudent(student.id);
  return `
    <section class="page">
      <div class="detail-nav">
        <button class="icon-button icon-button--quiet" data-action="back-from-student" aria-label="返回学生列表">
          ${icon("chevron-left")}
        </button>
        <strong>学生档案</strong>
      </div>

      <div class="welcome-line">
        <div class="profile-person" style="color:var(--ink)">
          <img src="${student.avatar}" alt="${student.name}" style="border-color:var(--line-strong)" />
          <div>
            <h1 style="font-size:22px">${student.name}</h1>
            <p>${student.className} · ${student.major}</p>
          </div>
        </div>
        <span class="${progressClass(student.skills.find((skill) => skill.status === "未掌握") ? "未掌握" : "训练中")}">${student.stage}</span>
      </div>

      <div class="stat-strip">
        <div class="stat-item"><strong>${student.progress}<small>%</small></strong><span>备考完成度</span></div>
        <div class="stat-item"><strong>${student.remaining}<small>节</small></strong><span>剩余课时</span></div>
        <div class="stat-item"><strong>${feedbackForStudent(student.id).length}<small>条</small></strong><span>历史点评</span></div>
      </div>

      <section class="section">
        <div class="section-title"><div><h2>备考档案</h2><p>教务信息与考学目标</p></div></div>
        <div class="detail-panel">
          ${detailRow("目标院校", student.target)}
          ${detailRow("专业方向", student.major)}
          ${detailRow("当前阶段", student.stage)}
          ${detailRow("最近点评", student.lastFeedback)}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>技巧项进度</h2><p>最近一次由授课教师更新</p></div>
          <button class="text-link" data-action="open-progress" data-student-id="${student.id}">录入 ${icon("chevron-right")}</button>
        </div>
        <div class="skill-list">
          ${student.skills
            .map(
              (skill) => `
                <article class="skill-row">
                  <div class="skill-main">
                    <strong>${skill.name}</strong>
                    <span>${skill.note}</span>
                    <div class="skill-track"><i style="width:${skill.value}%"></i></div>
                  </div>
                  <span class="${progressClass(skill.status)}">${skill.status}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <div><h2>最近点评</h2><p>${feedbacks.length ? "已同步至学生端" : "暂无点评记录"}</p></div>
          <button class="text-link" data-action="open-feedback" data-student-id="${student.id}">写点评 ${icon("chevron-right")}</button>
        </div>
        <div class="feedback-list">${feedbacks.slice(0, 2).map((item) => feedbackCard(item)).join("")}</div>
      </section>

      <div class="button-row section">
        <button class="secondary-button" data-action="open-score" data-student-id="${student.id}">${icon("chart-line")}录入成绩</button>
        <button class="primary-button" data-action="open-progress" data-student-id="${student.id}">${icon("list-checks")}更新进度</button>
      </div>
    </section>
  `;
}

function renderTeacherProfilePage() {
  return `
    <section class="page">
      <section class="teacher-profile">
        <div class="teacher-profile__person">
          <img src="${IMG.teacher}" alt="周予安" />
          <div>
            <h2>周予安</h2>
            <p>台词主教 · 中央戏剧学院表演系</p>
          </div>
        </div>
        <div class="teacher-profile__stats">
          <div class="teacher-profile__stat"><strong>3</strong><span>本周课程</span></div>
          <div class="teacher-profile__stat"><strong>8</strong><span>名下学生</span></div>
          <div class="teacher-profile__stat"><strong>4.9</strong><span>课堂评分</span></div>
        </div>
      </section>

      <section class="section">
        <div class="section-title"><div><h2>教学事务</h2><p>请假、班级与学生档案</p></div></div>
        <div class="detail-panel">
          <button class="list-action" data-action="open-approvals">
            <span class="list-action__icon">${icon("calendar-check")}</span>
            <span><strong>请假审批</strong><span>${pendingLeaveCount()} 份申请待处理 · 填写补课安排</span></span>
            ${icon("chevron-right")}
          </button>
          <button class="list-action" data-action="navigate" data-tab="students">
            <span class="list-action__icon">${icon("users")}</span>
            <span><strong>学生列表</strong><span>查看档案、进度与最近点评</span></span>
            ${icon("chevron-right")}
          </button>
          <button class="list-action" data-action="open-score">
            <span class="list-action__icon">${icon("chart-line")}</span>
            <span><strong>模拟成绩</strong><span>录入后自动生成班级排名</span></span>
            ${icon("chevron-right")}
          </button>
          <button class="list-action" data-action="open-messages">
            <span class="list-action__icon">${icon("bell")}</span>
            <span><strong>消息通知</strong><span>课表、请假与成绩录入提醒</span></span>
            ${icon("chevron-right")}
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-title"><div><h2>所属校区</h2><p>北京朝阳校区 · 表演教研组</p></div></div>
        <div class="detail-panel">
          ${detailRow("教研组", "表演教研组")}
          ${detailRow("带班", "2026届表演班A、B")}
          ${detailRow("本周课时", "8.5 小时")}
        </div>
      </section>

      <section class="section">
        <div class="button-row">
          <button class="secondary-button" data-action="contact-teacher">${icon("message-circle")}联系教务</button>
          <button class="danger-button" data-action="reset-demo">${icon("rotate-ccw")}重置演示</button>
        </div>
      </section>
    </section>
  `;
}

function emptyState(iconName, title, text) {
  return `
    <div class="empty-state">
      ${icon(iconName)}
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `;
}

function openSheet(type, payload = {}) {
  state.sheet = { type, ...payload };
  if (type === "attendance") {
    const item = classById(payload.classId);
    state.sheet.draft = {};
    item.studentIds.forEach((id) => {
      const student = studentById(id);
      state.sheet.draft[id] = student.attendance;
    });
  }
  if (type === "progress") {
    const student = studentById(payload.studentId || "s1");
    state.sheet.draft = clone(student.skills);
    state.sheet.percent = student.progress;
  }
  if (type === "feedback") {
    state.sheet.uploaded = false;
  }
  renderSheet();
}

function closeSheet() {
  state.sheet = null;
  sheetLayer.classList.remove("is-open");
  sheetLayer.setAttribute("aria-hidden", "true");
  bottomSheet.innerHTML = "";
}

function renderSheet() {
  if (!state.sheet) return;
  sheetLayer.classList.add("is-open");
  sheetLayer.setAttribute("aria-hidden", "false");

  if (state.sheet.type === "attendance") bottomSheet.innerHTML = attendanceSheet();
  if (state.sheet.type === "leave") bottomSheet.innerHTML = leaveSheet();
  if (state.sheet.type === "feedback") bottomSheet.innerHTML = feedbackComposeSheet();
  if (state.sheet.type === "progress") bottomSheet.innerHTML = progressSheet();
  if (state.sheet.type === "score") bottomSheet.innerHTML = scoreSheet();
  if (state.sheet.type === "approvals") bottomSheet.innerHTML = approvalsSheet();
  if (state.sheet.type === "feedback-detail") bottomSheet.innerHTML = feedbackDetailSheet(state.sheet.id);
  if (state.sheet.type === "admin-schedule") bottomSheet.innerHTML = adminScheduleSheet();
  if (state.sheet.type === "change-request") bottomSheet.innerHTML = teacherChangeSheet();
  if (state.sheet.type === "availability") bottomSheet.innerHTML = teacherAvailabilitySheet();

  refreshIcons(bottomSheet);
}

function sheetHeader(title, subtitle) {
  return `
    <div class="sheet-grabber"></div>
    <div class="sheet-head">
      <div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ""}</div>
      <button class="sheet-close" data-action="close-sheet" aria-label="关闭">${icon("x")}</button>
    </div>
  `;
}

function attendanceSheet() {
  const item = classById(state.sheet.classId);
  const students = item.studentIds.map(studentById).filter(Boolean);
  const completed = Object.values(state.sheet.draft).filter(Boolean).length;
  return `
    ${sheetHeader("课堂点名", `${item.title} · ${item.time}-${item.end} · ${item.room}`)}
    <form class="form-stack" data-form="attendance">
      <div class="inline-note">提交后同步扣减课时，并通知学生。当前已标记 ${completed}/${students.length} 人。</div>
      <div>
        ${students
          .map(
            (student) => `
              <div class="attendance-student">
                <span class="attendance-student__avatar">${student.initials}</span>
                <div class="attendance-student__body">
                  <div class="attendance-student__top">
                    <strong>${student.name}</strong>
                    <span>剩 ${student.remaining} 课时</span>
                  </div>
                  <div class="attendance-options">
                    ${attendanceOption(student.id, "present", "到课")}
                    ${attendanceOption(student.id, "late", "迟到")}
                    ${attendanceOption(student.id, "leave", "请假")}
                    ${attendanceOption(student.id, "absent", "未到")}
                  </div>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
      <button class="primary-button" type="submit">${icon("check")}提交点名并扣课时</button>
    </form>
  `;
}

function attendanceOption(studentId, status, label) {
  return `
    <button type="button" class="attendance-option ${state.sheet.draft[studentId] === status ? "is-active" : ""}" data-status="${status}" data-action="set-attendance" data-student-id="${studentId}">
      ${label}
    </button>
  `;
}

function leaveSheet() {
  return `
    ${sheetHeader("请假申请", "提交后由班主任审批，审批结果会同步到消息通知。")}
    <form class="form-stack" data-form="leave">
      <div class="field">
        <label for="leave-date">请假日期</label>
        <input id="leave-date" name="date" type="date" min="2026-11-12" value="2026-11-13" required />
      </div>
      <div class="field">
        <label for="leave-reason">请假事由</label>
        <textarea id="leave-reason" name="reason" placeholder="请填写具体原因，便于老师安排补课。" required></textarea>
        <span class="field-hint">提交后如需调整，请联系班主任处理。</span>
      </div>
      <button class="primary-button" type="submit">${icon("send")}提交申请</button>
    </form>
  `;
}

function feedbackComposeSheet() {
  const targetId = state.sheet.studentId || state.students.find((student) => student.pendingFeedback > 0)?.id || "s1";
  return `
    ${sheetHeader("录制训练点评", "选择学生，上传 1-2 分钟训练片段并填写反馈。")}
    <form class="form-stack" data-form="feedback">
      <div class="field">
        <label for="feedback-student">点评学生</label>
        <select id="feedback-student" name="studentId">
          ${state.students.map((student) => `<option value="${student.id}" ${student.id === targetId ? "selected" : ""}>${student.name} · ${student.className}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <span>训练片段</span>
        ${
          state.sheet.uploaded
            ? `
              <div class="upload-zone has-video">
                <span class="feedback-preview__play">${icon("play")}</span>
                <span class="video-pill">00:27 / 01:27</span>
              </div>
            `
            : `
              <button type="button" class="upload-zone" data-action="simulate-upload">
                <span><span>${icon("upload")}</span><strong>上传视频或直接录制</strong><span>支持 1-2 分钟片段</span></span>
              </button>
            `
        }
      </div>
      <div class="field">
        <label for="feedback-text">文字点评</label>
        <textarea id="feedback-text" name="summary" placeholder="描述做得好的地方与下一步训练重点。" required></textarea>
      </div>
      <button class="primary-button" type="submit">${icon("send")}提交点评</button>
    </form>
  `;
}

function progressSheet() {
  const student = studentById(state.sheet.studentId || "s1");
  return `
    ${sheetHeader("备考进度录入", `${student.name} · ${student.className}`)}
    <form class="form-stack" data-form="progress">
      <div class="field">
        <label for="progress-student">学生</label>
        <select id="progress-student" name="studentId" data-progress-student>
          ${state.students.map((item) => `<option value="${item.id}" ${item.id === student.id ? "selected" : ""}>${item.name} · ${item.className}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="progress-percent">整体完成百分比</label>
        <div style="display:flex;align-items:center;gap:10px">
          <input id="progress-percent" name="percent" type="range" min="0" max="100" value="${state.sheet.percent}" style="flex:1;padding:0" />
          <strong id="progress-percent-value" style="min-width:34px;text-align:right;font-size:12px">${state.sheet.percent}%</strong>
        </div>
      </div>
      <div class="skill-editor">
        ${state.sheet.draft
          .map(
            (skill, index) => `
              <div class="skill-editor__row">
                <div class="skill-editor__top">
                  <strong>${skill.name}</strong>
                  <span class="stepper">
                    <button type="button" data-action="skill-step" data-index="${index}" data-value="-5">${icon("minus")}</button>
                    <span data-skill-value="${index}">${skill.value}%</span>
                    <button type="button" data-action="skill-step" data-index="${index}" data-value="5">${icon("plus")}</button>
                  </span>
                </div>
                <div class="status-options">
                  ${["未掌握", "训练中", "已达标"]
                    .map(
                      (status) => `
                        <button type="button" class="status-option ${skill.status === status ? "is-active" : ""}" data-action="set-skill-status" data-index="${index}" data-value="${status}">${status}</button>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
      <button class="primary-button" type="submit">${icon("check")}保存进度</button>
    </form>
  `;
}

function scoreSheet() {
  const student = studentById(state.sheet.studentId || "s1");
  return `
    ${sheetHeader("模拟成绩录入", `${student.name} · 2026年11月`)}
    <form class="form-stack" data-form="score">
      <div class="field">
        <label for="score-student">学生</label>
        <select id="score-student" name="studentId">
          ${state.students.map((item) => `<option value="${item.id}" ${item.id === student.id ? "selected" : ""}>${item.name} · ${item.className}</option>`).join("")}
        </select>
      </div>
      <div class="field-row">
        <div class="field">
          <label for="score-month">考试月份</label>
          <input id="score-month" name="month" value="11月" required />
        </div>
        <div class="field">
          <label for="score-province">省统考模拟分</label>
          <input id="score-province" name="province" type="number" min="0" max="100" value="86" required />
        </div>
      </div>
      <div class="field">
        <label for="score-school">校考模拟分</label>
        <input id="score-school" name="school" type="number" min="0" max="100" value="84" required />
      </div>
      <div class="inline-note">提交后系统将自动更新班级排名，并同步至学生端模拟考趋势。</div>
      <div>
        <div class="section-title" style="margin-bottom:8px">
          <div><h2 style="font-size:15px">当前班级排名</h2><p>按省统考模拟分自动排序</p></div>
        </div>
        <div class="detail-panel">
          ${state.teacherScoreRanking
            .slice(0, 5)
            .map(
              (item, index) => `
                <div class="score-rank">
                  <span class="score-rank__index">${index + 1}</span>
                  <span class="score-rank__main"><strong>${item.name}</strong><span>2026届表演班A</span></span>
                  <span class="score-rank__value"><strong>${item.score}</strong><span>省统考模拟</span></span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <button class="primary-button" type="submit">${icon("check")}提交成绩</button>
    </form>
  `;
}

function approvalsSheet() {
  const leaves = state.leaves.filter((leave) => leave.status === "pending");
  return `
    ${sheetHeader("请假审批", "通过后填写补课安排，结果会同步通知学生。")}
    ${
      leaves.length
        ? `<div class="approval-list">${leaves
            .map((leave) => {
              const student = studentById(leave.studentId);
              return `
                <article class="approval-item">
                  <div class="approval-item__top">
                    <div class="approval-item__person">
                      <img src="${student.avatar}" alt="${student.name}" />
                      <div><strong>${student.name}</strong><span>${student.className} · ${leave.date}</span></div>
                    </div>
                    <span class="status-pill status-pill--amber">待审批</span>
                  </div>
                  <p class="approval-reason">${escapeHtml(leave.reason)}</p>
                  <div class="field" style="margin-top:10px">
                    <label for="replacement-${leave.id}">补课安排</label>
                    <input id="replacement-${leave.id}" value="${escapeHtml(leave.replacement)}" placeholder="例：11月15日 14:00 一对一补课" />
                  </div>
                  <div class="approval-actions">
                    <button class="danger-button" data-action="reject-leave" data-id="${leave.id}">驳回</button>
                    <button class="primary-button" data-action="approve-leave" data-id="${leave.id}">${icon("check")}通过</button>
                  </div>
                </article>
              `;
            })
            .join("")}</div>`
        : emptyState("calendar-check", "暂无待审批申请", "新的请假申请会出现在这里。")
    }
  `;
}

function feedbackDetailSheet(id) {
  const feedback = state.feedbacks.find((item) => item.id === id);
  if (!feedback) return "";
  return `
    ${sheetHeader("训练点评详情", `${feedback.date} · ${feedback.teacher} 老师`)}
    <div class="modal-video">
      <span class="modal-video__play">${icon("play")}</span>
      <span class="modal-video__meta">${feedback.duration}</span>
    </div>
    <div class="feedback-note">
      <span class="feedback-note__label">${feedback.title} · ${feedback.tags.join(" / ")}</span>
      <p>${feedback.summary}</p>
      <div class="feedback-note__actions">
        <button class="secondary-button" data-action="ack-feedback">${icon("thumbs-up")}有帮助</button>
        <button class="primary-button" data-action="contact-teacher">${icon("message-circle")}询问老师</button>
      </div>
    </div>
  `;
}

function adminScheduleSheet() {
  const editing = state.sheet.sessionId
    ? state.adminSessions.find((item) => item.id === state.sheet.sessionId)
    : null;
  return `
    ${sheetHeader(editing ? "调整课程安排" : "新建排课", "保存为草稿，发布前系统会检查教师、学生与教室冲突。")}
    <form class="form-stack" data-form="admin-schedule">
      <div class="field">
        <label for="admin-schedule-title">课程名称</label>
        <input id="admin-schedule-title" name="title" value="${escapeHtml(editing?.title || "台词片段 · 冲刺训练")}" required />
      </div>
      <div class="field-row">
        <div class="field">
          <label for="admin-schedule-campus">校区</label>
          <select id="admin-schedule-campus" name="campusId">
            ${state.campuses
              .map(
                (campus) => `<option value="${campus.id}" ${campus.id === (editing?.campusId || "cy") ? "selected" : ""}>${campus.name}</option>`,
              )
              .join("")}
          </select>
        </div>
        <div class="field">
          <label for="admin-schedule-teacher">授课教师</label>
          <select id="admin-schedule-teacher" name="teacher">
            ${teacherResources.map((teacher) => `<option value="${teacher.name}" ${teacher.name === (editing?.teacher || "周予安") ? "selected" : ""}>${teacher.name}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="field">
        <label for="admin-schedule-class">所属班级</label>
        <input id="admin-schedule-class" name="className" value="${escapeHtml(editing?.className || "2026届表演班A")}" required />
      </div>
      <div class="field-row field-row--three">
        <div class="field">
          <label for="admin-schedule-day">上课日</label>
          <select id="admin-schedule-day" name="day">
            ${["周一", "周二", "周三", "周四", "周五"]
              .map((day) => `<option ${day === (editing?.day || state.adminDay) ? "selected" : ""}>${day}</option>`)
              .join("")}
          </select>
        </div>
        <div class="field">
          <label for="admin-schedule-start">开始</label>
          <input id="admin-schedule-start" name="time" type="time" value="${editing?.time || "14:00"}" required />
        </div>
        <div class="field">
          <label for="admin-schedule-end">结束</label>
          <input id="admin-schedule-end" name="end" type="time" value="${editing?.end || "16:00"}" required />
        </div>
      </div>
      <div class="field">
        <label for="admin-schedule-room">教室</label>
        <input id="admin-schedule-room" name="room" value="${escapeHtml(editing?.room || "黑匣子剧场")}" required />
      </div>
      <div class="inline-note">多校区模式下，教师课表会跨校区统一校验。存在冲突时会保存为草稿，不能直接发布。</div>
      <button class="primary-button" type="submit">${icon("check")}保存排课草稿</button>
    </form>
  `;
}

function teacherChangeSheet() {
  const classItem = classById(state.sheet.classId || "a");
  return `
    ${sheetHeader("申请调课", "提交后由教务审批，通过前原课表保持不变。")}
    <form class="form-stack" data-form="change-request">
      <div class="field">
        <label for="change-class">课程</label>
        <select id="change-class" name="classId">
          ${state.classes.map((item) => `<option value="${item.id}" ${item.id === classItem.id ? "selected" : ""}>${item.className} · ${item.title}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="change-original">原上课时间</label>
        <input id="change-original" name="original" value="11月14日 ${classItem.time}-${classItem.end}" readonly />
      </div>
      <div class="field">
        <label for="change-requested">希望调整到</label>
        <input id="change-requested" name="requested" type="datetime-local" value="2026-11-15T14:00" required />
      </div>
      <div class="field">
        <label for="change-reason">调课原因</label>
        <textarea id="change-reason" name="reason" placeholder="请说明调课原因，方便教务协调教室和其他学生时间。" required></textarea>
      </div>
      <div class="inline-note">系统会检查教师、教室和班级冲突；跨校区课程由区域负责人补充确认。</div>
      <button class="primary-button" type="submit">${icon("send")}提交调课申请</button>
    </form>
  `;
}

function teacherAvailabilitySheet() {
  return `
    ${sheetHeader("录入可排时间", "教师提交可排时段，教务在可用范围内统一排课。")}
    <form class="form-stack" data-form="availability">
      <div class="field">
        <label for="availability-campus">适用校区</label>
        <select id="availability-campus" name="campusId">
          ${state.campuses.map((campus) => `<option value="${campus.id}">${campus.name}</option>`).join("")}
        </select>
      </div>
      <div class="field-row">
        <div class="field"><label for="availability-start">开始时间</label><input id="availability-start" name="start" type="time" value="09:00" required /></div>
        <div class="field"><label for="availability-end">结束时间</label><input id="availability-end" name="end" type="time" value="18:00" required /></div>
      </div>
      <div class="field">
        <label for="availability-note">不可排说明</label>
        <textarea id="availability-note" name="note" placeholder="例如：周三下午参加教研，不接受排课。"></textarea>
      </div>
      <button class="primary-button" type="submit">${icon("check")}保存可排时间</button>
    </form>
  `;
}

function showToast(message) {
  if (toastTimer) window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function switchRole(role) {
  state.role = role;
  state.studentDetail = null;
  closeSheet();
  renderApp({ keepScroll: false });
}

function navigate(tab) {
  state[`${state.role}Tab`] = tab;
  state.studentDetail = null;
  renderApp({ keepScroll: false });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "switch-role") {
    switchRole(target.dataset.role);
    return;
  }

  if (action === "navigate") {
    navigate(target.dataset.tab);
    return;
  }

  if (action === "admin-tab") {
    state.adminTab = target.dataset.tab;
    renderApp({ keepScroll: false });
    return;
  }

  if (action === "set-org-mode") {
    state.orgMode = target.dataset.value;
    state.selectedCampus = state.orgMode === "single" ? "cy" : "all";
    const first = visibleAdminSessions()[0];
    state.selectedSessionId = first?.id || null;
    renderApp();
    showToast(
      state.orgMode === "multi"
        ? "已切换为多校区模式"
        : "已切换为单校区模式",
    );
    return;
  }

  if (action === "set-campus") {
    state.selectedCampus = target.dataset.campus;
    const first = visibleAdminSessions()[0];
    state.selectedSessionId = first?.id || null;
    renderApp();
    return;
  }

  if (action === "set-admin-day") {
    state.adminDay = target.dataset.day;
    const first = visibleAdminSessions()[0];
    state.selectedSessionId = first?.id || null;
    renderApp();
    return;
  }

  if (action === "select-admin-session") {
    state.selectedSessionId = target.dataset.id;
    renderApp();
    return;
  }

  if (action === "open-admin-schedule") {
    openSheet("admin-schedule");
    return;
  }

  if (action === "admin-edit-session") {
    openSheet("admin-schedule", { sessionId: target.dataset.id });
    return;
  }

  if (action === "open-change-request") {
    openSheet("change-request", { classId: target.dataset.classId || "a" });
    return;
  }

  if (action === "teacher-availability") {
    openSheet("availability");
    return;
  }

  if (action === "admin-auto-check") {
    const conflicts = getScheduleConflicts();
    showToast(
      conflicts.length
        ? `发现 ${conflicts.length} 项跨校区冲突，请先调整教师时间`
        : "冲突检查通过，可以发布课表",
    );
    return;
  }

  if (action === "admin-publish-day") {
    const conflicts = getScheduleConflicts();
    if (conflicts.length) {
      showToast("发布已阻止：请先处理跨校区教师冲突");
      return;
    }
    visibleAdminSessions().forEach((session) => {
      session.status = "已发布";
    });
    renderApp();
    showToast("课表已发布，教师和学生已收到通知");
    return;
  }

  if (action === "admin-approve-change") {
    const request = state.changeRequests.find(
      (item) => item.id === target.dataset.id,
    );
    request.status = "approved";
    state.notifications.teacher.unshift({
      id: `t-${Date.now()}`,
      title: "调课申请已通过",
      text: `${request.className} 已调整至 ${request.requested}`,
      time: "刚刚",
      unread: true,
      icon: "calendar-check",
    });
    state.messagesRead.teacher = false;
    renderApp();
    showToast("调课已通过并生成课表新版本");
    return;
  }

  if (action === "admin-reject-change") {
    const request = state.changeRequests.find(
      (item) => item.id === target.dataset.id,
    );
    request.status = "rejected";
    state.notifications.teacher.unshift({
      id: `t-${Date.now()}`,
      title: "调课申请未通过",
      text: `${request.className} 的调课申请需要重新协调时间`,
      time: "刚刚",
      unread: true,
      icon: "calendar-clock",
    });
    state.messagesRead.teacher = false;
    renderApp();
    showToast("已驳回调课申请并通知教师");
    return;
  }

  if (action === "open-messages") {
    state.messageOrigin =
      state.role === "student"
        ? state.studentTab
        : state.role === "teacher"
          ? state.teacherTab
          : state.adminTab;
    state[`${state.role}Tab`] = "messages";
    state.messagesRead[state.role] = true;
    state.notifications[state.role].forEach((item) => {
      item.unread = false;
    });
    state.studentDetail = null;
    renderApp({ keepScroll: false });
    return;
  }

  if (action === "back-from-messages") {
    state[`${state.role}Tab`] =
      state.messageOrigin || (state.role === "admin" ? "schedule" : "home");
    renderApp({ keepScroll: false });
    return;
  }

  if (action === "set-feedback-filter") {
    state.feedbackFilter = target.dataset.value;
    renderApp();
    return;
  }

  if (action === "set-teacher-view") {
    state.teacherView = target.dataset.value;
    renderApp();
    return;
  }

  if (action === "week-day") {
    showToast("已切换到本周课表");
    return;
  }

  if (action === "open-attendance") {
    openSheet("attendance", { classId: target.dataset.classId || "a" });
    return;
  }

  if (action === "set-attendance") {
    state.sheet.draft[target.dataset.studentId] = target.dataset.status;
    renderSheet();
    return;
  }

  if (action === "open-leave") {
    openSheet("leave");
    return;
  }

  if (action === "open-feedback") {
    openSheet("feedback", { studentId: target.dataset.studentId });
    return;
  }

  if (action === "open-progress") {
    openSheet("progress", { studentId: target.dataset.studentId || "s1" });
    return;
  }

  if (action === "open-score") {
    openSheet("score", { studentId: target.dataset.studentId || "s1" });
    return;
  }

  if (action === "open-approvals") {
    openSheet("approvals");
    return;
  }

  if (action === "open-feedback-detail") {
    openSheet("feedback-detail", { id: target.dataset.id });
    return;
  }

  if (action === "close-sheet") {
    closeSheet();
    return;
  }

  if (action === "simulate-upload") {
    state.sheet.uploaded = true;
    renderSheet();
    showToast("训练片段已添加");
    return;
  }

  if (action === "skill-step") {
    const index = Number(target.dataset.index);
    const delta = Number(target.dataset.value);
    const skill = state.sheet.draft[index];
    skill.value = Math.max(0, Math.min(100, skill.value + delta));
    renderSheet();
    return;
  }

  if (action === "set-skill-status") {
    const index = Number(target.dataset.index);
    state.sheet.draft[index].status = target.dataset.value;
    renderSheet();
    return;
  }

  if (action === "open-student") {
    state.studentDetail = target.dataset.id;
    renderApp({ keepScroll: false });
    return;
  }

  if (action === "back-from-student") {
    state.studentDetail = null;
    renderApp({ keepScroll: false });
    return;
  }

  if (action === "approve-leave") {
    const leave = state.leaves.find((item) => item.id === target.dataset.id);
    const input = document.getElementById(`replacement-${leave.id}`);
    leave.replacement = input?.value.trim() || "11月15日 14:00 一对一补课";
    leave.status = "approved";
    state.notifications.student.unshift({
      id: `n-${Date.now()}`,
      title: "请假审批已通过",
      text: `${leave.date}请假已通过，补课安排：${leave.replacement}`,
      time: "刚刚",
      unread: true,
      icon: "calendar-check",
    });
    state.messagesRead.student = false;
    renderSheet();
    renderApp();
    showToast("已通过请假，并通知学生");
    return;
  }

  if (action === "reject-leave") {
    const leave = state.leaves.find((item) => item.id === target.dataset.id);
    leave.status = "rejected";
    state.notifications.student.unshift({
      id: `n-${Date.now()}`,
      title: "请假申请未通过",
      text: `${leave.date}请假申请未通过，请联系班主任了解原因。`,
      time: "刚刚",
      unread: true,
      icon: "calendar-check",
    });
    state.messagesRead.student = false;
    renderSheet();
    renderApp();
    showToast("已驳回请假申请");
    return;
  }

  if (action === "open-message") {
    target.classList.remove("is-unread");
    showToast("已读");
    return;
  }

  if (action === "ack-feedback") {
    showToast("已记录你的反馈");
    return;
  }

  if (action === "contact-teacher") {
    showToast("已发起与班主任的会话");
    return;
  }

  if (action === "reset-demo") {
    state = clone(seed);
    closeSheet();
    renderApp({ keepScroll: false });
    showToast("演示数据已恢复");
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-form]");
  if (!form) return;
  event.preventDefault();
  const formType = form.dataset.form;

  if (formType === "admin-schedule") {
    const data = new FormData(form);
    const sessionId = state.sheet.sessionId || `as-${Date.now()}`;
    const existing = state.adminSessions.find(
      (session) => session.id === sessionId,
    );
    const payload = {
      id: sessionId,
      day: data.get("day"),
      time: data.get("time"),
      end: data.get("end"),
      title: data.get("title"),
      teacher: data.get("teacher"),
      className: data.get("className"),
      room: data.get("room"),
      campusId: data.get("campusId"),
      status: "草稿",
      students: existing?.students || 4,
      color: existing?.color || "amber",
    };
    if (existing) Object.assign(existing, payload);
    else state.adminSessions.push(payload);
    state.adminTab = "schedule";
    state.adminDay = payload.day;
    state.selectedCampus =
      state.orgMode === "multi" ? payload.campusId : "cy";
    state.selectedSessionId = payload.id;
    const conflict = getScheduleConflicts().some(
      (item) => item.id === payload.id,
    );
    if (conflict) {
      state.notifications.admin.unshift({
        id: `a-${Date.now()}`,
        title: "排课冲突待处理",
        text: `${payload.teacher}老师在 ${payload.day} ${payload.time} 存在跨校区冲突`,
        time: "刚刚",
        unread: true,
        icon: "circle-alert",
      });
      state.messagesRead.admin = false;
    }
    closeSheet();
    renderApp({ keepScroll: false });
    showToast(
      conflict
        ? "已保存为草稿，发现跨校区教师冲突"
        : "排课已保存为草稿，可提交发布",
    );
    return;
  }

  if (formType === "change-request") {
    const data = new FormData(form);
    const item = classById(data.get("classId"));
    const requestedRaw = String(data.get("requested"));
    const requested = requestedRaw
      .replace("T", " ")
      .replace("2026-", "")
      .replace("-", "月")
      .replace(" ", "日 ");
    state.changeRequests.unshift({
      id: `cr-${Date.now()}`,
      teacher: "周予安",
      campusId: item.campusId || "cy",
      className: item.className,
      original: data.get("original"),
      requested,
      reason: data.get("reason"),
      status: "pending",
    });
    state.notifications.admin.unshift({
      id: `a-${Date.now()}`,
      title: "新的教师调课申请",
      text: `${item.className} 申请调整至 ${requested}`,
      time: "刚刚",
      unread: true,
      icon: "calendar-clock",
    });
    state.messagesRead.admin = false;
    closeSheet();
    renderApp();
    showToast("调课申请已提交，等待教务审批");
    return;
  }

  if (formType === "availability") {
    closeSheet();
    showToast("可排时间已保存，教务排课时将自动校验");
    return;
  }

  if (formType === "attendance") {
    const item = classById(state.sheet.classId);
    item.studentIds.forEach((id) => {
      const student = studentById(id);
      const next = state.sheet.draft[id];
      if (["present", "late"].includes(next) && student.attendance !== next) {
        student.remaining = Math.max(0, student.remaining - 1);
      }
      student.attendance = next;
    });
    state.classes[0].progress = 68;
    state.notifications.student.unshift({
      id: `n-${Date.now()}`,
      title: "课堂考勤已更新",
      text: `${item.title} · ${attendanceLabel(state.sheet.draft.s1)}`,
      time: "刚刚",
      unread: true,
      icon: "clipboard-check",
    });
    state.messagesRead.student = false;
    closeSheet();
    renderApp();
    showToast("点名已提交，课时与考勤已同步");
    return;
  }

  if (formType === "leave") {
    const data = new FormData(form);
    const dateValue = data.get("date");
    const date = String(dateValue).slice(5).replace("-", "月") + "日";
    state.leaves.unshift({
      id: `l-${Date.now()}`,
      studentId: "s1",
      date,
      reason: data.get("reason"),
      status: "pending",
      replacement: "",
    });
    state.notifications.teacher.unshift({
      id: `t-${Date.now()}`,
      title: "新的请假申请",
      text: `林一然提交了 ${date} 的请假申请`,
      time: "刚刚",
      unread: true,
      icon: "calendar-plus",
    });
    state.messagesRead.teacher = false;
    closeSheet();
    renderApp();
    showToast("请假申请已提交，等待班主任审批");
    return;
  }

  if (formType === "feedback") {
    const data = new FormData(form);
    const studentId = data.get("studentId");
    const summary =
      data.get("summary") ||
      "整体状态稳定，下一次继续保持真实交流，并把动作目的落实到每一句话。";
    const student = studentById(studentId);
    state.feedbacks.unshift({
      id: `f-${Date.now()}`,
      studentId,
      date: "11月12日",
      fullDate: "2026-11-12",
      title: "课堂训练片段",
      teacher: "周予安",
      duration: "01:27",
      summary,
      tags: ["课堂训练", "视频点评"],
    });
    student.lastFeedback = summary.slice(0, 36);
    student.pendingFeedback = Math.max(0, student.pendingFeedback - 1);
    state.notifications.student.unshift({
      id: `n-${Date.now()}`,
      title: "周老师更新了训练点评",
      text: `${student.name} · ${summary.slice(0, 26)}...`,
      time: "刚刚",
      unread: true,
      icon: "message-square",
    });
    state.messagesRead.student = false;
    closeSheet();
    renderApp();
    showToast("点评已提交，并同步到学生端");
    return;
  }

  if (formType === "progress") {
    const data = new FormData(form);
    const student = studentById(data.get("studentId"));
    student.skills = clone(state.sheet.draft);
    student.progress = Number(state.sheet.percent);
    closeSheet();
    renderApp();
    showToast(`${student.name}的备考进度已更新`);
    return;
  }

  if (formType === "score") {
    const data = new FormData(form);
    const student = studentById(data.get("studentId"));
    const province = Number(data.get("province"));
    const school = Number(data.get("school"));
    const month = String(data.get("month"));
    if (student.id === "s1") {
      const last = state.scores[state.scores.length - 1];
      if (last.month === month) {
        last.province = province;
        last.school = school;
      } else {
        state.scores.push({ month, label: month, province, school, rank: 8 });
      }
    }
    state.teacherScoreRanking = state.teacherScoreRanking
      .map((item) => (item.name === student.name ? { ...item, score: province } : item))
      .sort((a, b) => b.score - a.score);
    closeSheet();
    renderApp();
    showToast("成绩已录入，班级排名已自动更新");
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "teacher-search") {
    state.teacherSearch = event.target.value;
    const cursor = event.target.selectionStart;
    renderContent();
    refreshIcons();
    const nextInput = document.getElementById("teacher-search");
    if (nextInput) {
      nextInput.focus();
      nextInput.setSelectionRange(cursor, cursor);
    }
  }

  if (event.target.id === "progress-percent") {
    state.sheet.percent = Number(event.target.value);
    const value = document.getElementById("progress-percent-value");
    if (value) value.textContent = `${event.target.value}%`;
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-progress-student]")) {
    openSheet("progress", { studentId: event.target.value });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.sheet) closeSheet();
});

document.getElementById("status-time").textContent = formatClock();
window.setInterval(() => {
  document.getElementById("status-time").textContent = formatClock();
}, 30000);

renderApp({ keepScroll: false });
refreshIcons();
