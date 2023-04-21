// 切换浏览器页面时修改页面标题
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "hidden") {
    normal_title = document.title;
    document.title = "欢迎回来继续看 ...";
  } else {
    document.title = normal_title;
  }
});
// 禁止右键菜单
// document.oncontextmenu = function () {
//   return false;
// };
// 禁止文字选择
document.onselectstart = function () {
  return false;
};
// 禁止复制
document.oncopy = function () {
  return false;
};
// 禁止剪切
document.oncut = function () {
  return false;
};
// 禁止粘贴
document.onpaste = function () {
  return false;
};
