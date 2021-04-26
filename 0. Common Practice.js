let names = ['Ayra',
    'Dua',
    'Mehar',
    'Ishwa',
    'Mehak',
    'Hania',
    'Mariam',
'Thanza',
'Henza',
'Inaya',
'Abha',
'Zoya',
'Haya',
'Numa',
'Tanha',
'Asra',
'Samrah',
'Sidrah',
'Faiha',
'Diwa',
'Zehma',
'Hairin',
'Mebvi',
'Hyza',
'Fayha',
'Mirza',
'Mishka',
]
let copyNames = names;

names.forEach(e1 => {
    copyNames.filter(x => x != e1).forEach(e2 => {
        console.log(e1 + ' ' + e2);
    })
})