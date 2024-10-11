(() => {
    const themeSwitcher = document.createElement('button')
    themeSwitcher.classList.value = "fixed right-0 bottom-0 px-2"
    themeSwitcher.innerHTML = `<img src="/icon/theme-switcher.svg" alt="" srcset="" class="w-10 border-none">`
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