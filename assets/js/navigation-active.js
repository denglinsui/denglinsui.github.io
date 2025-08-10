// 导航菜单激活状态处理
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前页面的路径
  const currentPath = window.location.pathname;
  console.log('当前路径:', currentPath);
  
  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.nav-link');
  console.log('找到导航链接数量:', navLinks.length);
  
  // 遍历所有导航链接
  navLinks.forEach(function(link) {
    const linkPath = link.getAttribute('href');
    console.log('导航链接路径:', linkPath, '文本:', link.textContent);
    
    // 标准化路径（移除末尾的斜杠进行比较）
    const normalizedCurrentPath = currentPath.replace(/\/$/, '');
    const normalizedLinkPath = linkPath.replace(/\/$/, '');
    
    console.log('标准化当前路径:', normalizedCurrentPath);
    console.log('标准化链接路径:', normalizedLinkPath);
    
                    // 检查当前路径是否匹配导航链接
                if (normalizedCurrentPath === normalizedLinkPath) {
                    console.log('精确匹配成功，添加active类到:', link.textContent);
                    link.classList.add('active');
                } else if (linkPath !== '/' && normalizedCurrentPath.startsWith(normalizedLinkPath)) {
                    console.log('前缀匹配成功，添加active类到:', link.textContent);
                    link.classList.add('active');
                }
  });
  
  // 特殊处理首页
  if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
    const homeLink = document.querySelector('.masthead__menu-item--lg a');
    if (homeLink) {
      console.log('首页匹配成功');
      homeLink.classList.add('active');
    }
  }
});
