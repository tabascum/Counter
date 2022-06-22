function count() {
    let strt = document.getElementById('txtstart')
    let end = document.getElementById('txtend')
    let leap = document.getElementById('txtleap')
    let res = document.getElementById('res')

    if (strt.value.length == 0 || end.value.length == 0 || leap.value.length == 0) {
        alert('[ERROR!] Data missing!')
    } else {
        res.innerHTML = 'Counting: '
        let s = Number(strt.value)
        let e = Number(end.value)
        let l = Number(leap.value)
        if (s < e) {
            //increasing count
            for (let c = s; c <= e; c += l) {
                res.innerHTML += `${c} \u{1F463} `
            }
        } else {
            //decreasing count
            for (let c = s; c >= e; c -= l) {
                res.innerHTML += `${c} \u{1F463} `
            }
        }
        res.innerHTML += `\u{1F987}`
    }
} 