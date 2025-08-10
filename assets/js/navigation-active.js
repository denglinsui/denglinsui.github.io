// 导航菜单激活状态处理
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== 导航激活脚本开始执行 ===');
  
  // 获取当前页面的路径
  const currentPath = window.location.pathname;
  console.log('当前页面路径:', currentPath);

  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.nav-link');
  console.log('找到导航链接数量:', navLinks.length);

  // 如果没有找到导航链接，尝试其他选择器
  if (navLinks.length === 0) {
    console.log('未找到.nav-link，尝试其他选择器...');
    const altLinks = document.querySelectorAll('.masthead__menu-item a');
    console.log('找到.masthead__menu-item a数量:', altLinks.length);
    
    if (altLinks.length > 0) {
      // 为这些链接添加nav-link类
      altLinks.forEach(link => {
        link.classList.add('nav-link');
      });
      console.log('已为所有导航链接添加nav-link类');
    }
  }

  // 重新获取导航链接
  const allNavLinks = document.querySelectorAll('.nav-link');
  console.log('最终导航链接数量:', allNavLinks.length);

  // 遍历所有导航链接
  allNavLinks.forEach(function(link, index) {
    const linkPath = link.getAttribute('href');
    const linkText = link.textContent.trim();
    console.log(`链接${index + 1}: "${linkText}" -> "${linkPath}"`);

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

    console.log(`  标准化: "${normalizedCurrentPath}" vs "${normalizedLinkPath}"`);

    // 检查当前路径是否匹配导航链接
    let isMatch = false;
    
    // 精确匹配
    if (normalizedCurrentPath === normalizedLinkPath) {
      console.log(`  ✓ 精确匹配成功: "${linkText}"`);
      isMatch = true;
    }
    // 前缀匹配（对于子页面）
    else if (linkPath !== '/' && normalizedCurrentPath.startsWith(normalizedLinkPath)) {
      console.log(`  ✓ 前缀匹配成功: "${linkText}"`);
      isMatch = true;
    }
    // 首页匹配
    else if (linkPath === '/' && (normalizedCurrentPath === '' || normalizedCurrentPath === '/')) {
      console.log(`  ✓ 首页匹配成功: "${linkText}"`);
      isMatch = true;
    }
    else {
      console.log(`  ✗ 不匹配: "${linkText}"`);
    }

    if (isMatch) {
      link.classList.add('active');
      console.log(`  ✓ 已添加active类到: "${linkText}"`);
    }
  });

  // 特殊处理首页（备用方法）
  if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
    const homeLink = document.querySelector('.masthead__menu-item--lg a');
    if (homeLink && !homeLink.classList.contains('active')) {
      console.log('首页匹配成功（备用方法）');
      homeLink.classList.add('active');
    }
  }

  // 最终检查
  const activeLinks = document.querySelectorAll('.nav-link.active');
  console.log('最终激活的链接数量:', activeLinks.length);
  if (activeLinks.length > 0) {
    activeLinks.forEach(function(link, index) {
      console.log(`激活链接${index + 1}: "${link.textContent.trim()}" (href: "${link.getAttribute('href')}")`);
    });
  } else {
    console.log('⚠️ 没有找到激活的链接！');
  }

  console.log('=== 导航激活脚本执行完成 ===');
});
