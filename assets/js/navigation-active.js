// 导航菜单激活状态处理
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前页面的路径
  const currentPath = window.location.pathname;
  
  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.nav-link');
  
  // 遍历所有导航链接
  navLinks.forEach(function(link) {
    const linkPath = link.getAttribute('href');
    
    // 标准化路径（移除末尾的斜杠进行比较）
    const normalizedCurrentPath = currentPath.replace(/\/$/, '');
    const normalizedLinkPath = linkPath.replace(/\/$/, '');
    
    // 检查当前路径是否匹配导航链接
    if (normalizedCurrentPath === normalizedLinkPath || 
        (linkPath !== '/' && normalizedCurrentPath.startsWith(normalizedLinkPath))) {
      
      // 添加active类
      link.classList.add('active');
    }
  });
  
  // 特殊处理首页
  if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
    const homeLink = document.querySelector('.masthead__menu-item--lg a');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
});
