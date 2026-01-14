(() => {
  const MAX_MESSAGES = 20;
  const SAFETY_BUFFER = 2;

  function getArticles() {
    const root = document.querySelector("main");
    if (!root) return [];
    return Array.from(root.querySelectorAll("article"));
  }

  function trimMessages() {
    const articles = getArticles();
    const limit = MAX_MESSAGES + SAFETY_BUFFER;

    if (articles.length <= limit) return;

    const removeCount = articles.length - limit;

    for (let i = 0; i < removeCount; i++) {
      articles[i].remove();
    }
  }

  function startObserver() {
    const root = document.querySelector("main");
    if (!root) return;

    const observer = new MutationObserver(() => {
      clearTimeout(startObserver._t);
      startObserver._t = setTimeout(trimMessages, 300);
    });

    observer.observe(root, {
      childList: true,
      subtree: true
    });
  }

  const waitMain = setInterval(() => {
    if (document.querySelector("main")) {
      clearInterval(waitMain);
      startObserver();
    }
  }, 300);
})();
