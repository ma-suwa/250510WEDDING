  let lastScroll = 0;
  const nav = document.querySelector('.bottom-nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    

    if (currentScroll > lastScroll && currentScroll > 100) {
      // 下にスクロールしたら隠す
      nav.classList.add('hidden');
    } else {
      // 上にスクロールしたら表示
      nav.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });
