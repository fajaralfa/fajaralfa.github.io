(() => {
    const themeSwitcher = document.createElement('button')
    themeSwitcher.id = 'theme-switcher'
    themeSwitcher.innerHTML = `<img src="/icon/theme-switcher.svg" alt="" srcset="">`
    document.body.append(themeSwitcher)

    themeSwitcher.addEventListener('click', () => {
        const htmlClassList = document.querySelector('html').classList
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'
            htmlClassList.remove('dark')
        } else {
            localStorage.theme = 'dark'
            htmlClassList.add('dark')
        }
    })
})()