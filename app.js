async function git() {
    const dados = await fetch('https://api.github.com/users/MatheusVict')
    const final = await dados.json()
    console.log(final)
}

git()