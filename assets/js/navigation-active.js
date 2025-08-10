// 导航菜单激活状态处理
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前页面的路径
  const currentPath = window.location.pathname;

  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.nav-link');

  // 如果没有找到导航链接，尝试其他选择器
  if (navLinks.length === 0) {
    const altLinks = document.querySelectorAll('.masthead__menu-item a');
    if (altLinks.length > 0) {
      // 为这些链接添加nav-link类
      altLinks.forEach(link => {
        link.classList.add('nav-link');
      });
    }
  }

  // 重新获取导航链接
  const allNavLinks = document.querySelectorAll('.nav-link');

  // 遍历所有导航链接
  allNavLinks.forEach(function(link) {
    const linkPath = link.getAttribute('href');

    // 标准化路径（移除末尾的斜杠进行比较）
    const normalizedCurrentPath = currentPath.replace(/\/$/, '');
    
    // 处理链接路径：如果是完整URL，提取路径部分
    let normalizedLinkPath;
    if (linkPath.startsWith('http')) {
      // 如果是完整URL，提取路径部分
      const url = new URL(linkPath);
      normalizedLinkPath = url.pathname.replace(/\/$/, '');
    } else {
      // 如果是相对路径，直接使用
      normalizedLinkPath = linkPath.replace(/\/$/, '');
    }

    // 检查当前路径是否匹配导航链接
    let isMatch = false;
    
    // 精确匹配
    if (normalizedCurrentPath === normalizedLinkPath) {
      isMatch = true;
    }
    // 前缀匹配（对于子页面）
    else if (linkPath !== '/' && normalizedCurrentPath.startsWith(normalizedLinkPath)) {
      isMatch = true;
    }
    // 首页匹配
    else if (linkPath === '/' && (normalizedCurrentPath === '' || normalizedCurrentPath === '/')) {
      isMatch = true;
    }

    if (isMatch) {
      link.classList.add('active');
    }
  });

  // 特殊处理首页（备用方法）
  if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
    const homeLink = document.querySelector('.masthead__menu-item--lg a');
    if (homeLink && !homeLink.classList.contains('active')) {
      homeLink.classList.add('active');
    }
  }
});
