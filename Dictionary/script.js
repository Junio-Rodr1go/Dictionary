function ChangePage(btns, content) {
    btns.forEach( btn => {
        btn.onclick = e => {

            btns.forEach( btn => {
                btn.classList.remove('buttonTarget')
            })

            e.preventDefault()
            

            e.target.classList.add('buttonTarget')
            const link = e.target.attributes['link'].value

            fetch(`pags/${link}`)
                .then(json => json.text())
                .then(html => {
                    content.innerHTML = html
                })
        }
    })
}


document.addEventListener( 'DOMContentLoaded', () => {
    const content = document.querySelector('.content')
    const buttons = document.querySelectorAll('nav div')
    const home = document.querySelectorAll('.home')


    ChangePage(buttons, content)
})