(() => {
    const htmlClassList = document.querySelector('html').classList
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlClassList.add('dark')
    } else {
        htmlClassList.remove('dark')
    }
})()