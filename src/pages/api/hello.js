const admins = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
]

const users = [
    {
        name: "Jacob Cross",
        phoneNumber: "0111175182",
        birthDate: "2003-11-29",
        birthPlace: "Yopal",
        address: "Ap #764-6156 Adipiscing Rd.",
        NISN: 5433,
        gender: "female"
    },
    {
        name: "Gray Snow",
        phoneNumber: "0818583343",
        birthDate: "2004-02-10",
        birthPlace: "Çermik",
        address: "Ap #310-874 Enim Ave",
        NISN: 5437,
        gender: "female"
    },
    {
        name: "Colleen Kelly",
        phoneNumber: "0587429461",
        birthDate: "2002-04-27",
        birthPlace: "San Nicolás",
        address: "1252 Magna, Road",
        NISN: 5396,
        gender: "female"
    },
    {
        name: "Xenos Bernard",
        phoneNumber: "0813042266",
        birthDate: "2005-08-28",
        birthPlace: "Lương Bằng",
        address: "Ap #800-1389 Metus. Rd.",
        NISN: 5405,
        gender: "female"
    },
    {
        name: "Amy Shannon",
        phoneNumber: "0668581140",
        birthDate: "2001-10-10",
        birthPlace: "Las Vegas",
        address: "Ap #379-4194 Velit Rd.",
        NISN: 5401,
        gender: "female"
    },
    {
        name: "Piper Goodwin",
        phoneNumber: "0183407473",
        birthDate: "2003-11-20",
        birthPlace: "Nam Định",
        address: "4441 Pellentesque Road",
        NISN: 5480,
        gender: "female"
    },
    {
        name: "Kelsey Leon",
        phoneNumber: "0205347956",
        birthDate: "2008-09-7",
        birthPlace: "Otukpo",
        address: "P.O. Box 822, 5081 Ac Street",
        NISN: 5434,
        gender: "female"
    },
    {
        name: "Aaron Albert",
        phoneNumber: "0705338188",
        birthDate: "2002-05-3",
        birthPlace: "Bergisch Gladbach",
        address: "Ap #446-4754 Adipiscing. Street",
        NISN: 5371,
        gender: "female"
    },
    {
        name: "Sheila Lynch",
        phoneNumber: "0322895738",
        birthDate: "2007-01-24",
        birthPlace: "Shanxi",
        address: "321-7300 Amet Street",
        NISN: 5402,
        gender: "female"
    },
    {
        name: "Len Yates",
        phoneNumber: "0549141165",
        birthDate: "2005-10-2",
        birthPlace: "Valéncia",
        address: "915-7413 Metus. St.",
        NISN: 5422,
        gender: "female"
    },
    {
        name: "Samuel Potts",
        phoneNumber: "0855031720",
        birthDate: "2005-10-4",
        birthPlace: "Dipolog",
        address: "7203 Eu, Street",
        NISN: 5445,
        gender: "female"
    },
    {
        name: "Ebony West",
        phoneNumber: "0874148684",
        birthDate: "2009-05-15",
        birthPlace: "Peshawar",
        address: "824-1197 Ut, Rd.",
        NISN: 5362,
        gender: "female"
    },
    {
        name: "Chaney Ayers",
        phoneNumber: "0333431352",
        birthDate: "2006-04-13",
        birthPlace: "Hay River",
        address: "163-107 Orci Avenue",
        NISN: 5478,
        gender: "female"
    },
    {
        name: "Gage Waller",
        phoneNumber: "0332245597",
        birthDate: "2002-04-25",
        birthPlace: "Ormoc",
        address: "P.O. Box 130, 8903 Donec St.",
        NISN: 5387,
        gender: "female"
    },
    {
        name: "Angela Shields",
        phoneNumber: "0488393324",
        birthDate: "2007-06-14",
        birthPlace: "Westport",
        address: "550-482 Ac Rd.",
        NISN: 5446,
        gender: "female"
    },
    {
        name: "Cameran Maddox",
        phoneNumber: "0864733559",
        birthDate: "2006-05-5",
        birthPlace: "Kongsvinger",
        address: "343-438 Vulputate Avenue",
        NISN: 5476,
        gender: "female"
    },
    {
        name: "Kibo Neal",
        phoneNumber: "0622548746",
        birthDate: "2004-08-2",
        birthPlace: "Galway",
        address: "P.O. Box 209, 4714 Eget Avenue",
        NISN: 5378,
        gender: "female"
    },
    {
        name: "Alan Jimenez",
        phoneNumber: "0775425274",
        birthDate: "2006-06-16",
        birthPlace: "Liberia",
        address: "561-448 Pellentesque Road",
        NISN: 5413,
        gender: "female"
    },
    {
        name: "Victor Frye",
        phoneNumber: "0179319881",
        birthDate: "2003-10-19",
        birthPlace: "Mamuju",
        address: "Ap #296-1691 Malesuada St.",
        NISN: 5388,
        gender: "female"
    },
    {
        name: "TaShya Rich",
        phoneNumber: "0373777735",
        birthDate: "2009-03-15",
        birthPlace: "Santiago",
        address: "P.O. Box 279, 5182 Nisi Av.",
        NISN: 5366,
        gender: "female"
    }
]

const books = {
    list: {
        categories: ['programming', 'history', 'cooking'],
        racks: ['1', '2', '3', '4', '5']
    },
    books: [
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
        {
            ISBN: '978-602-8519-93-9.',
            title: 'web programming',
            author: 'john doe',
            publisher: 'Jaya Abadi',
            year: '2019',
            amount: '120',
            category: 'programming',
            rack: '2'
        },
    ]
}

const categories = ['programming', 'history', 'cooking']

const racks = ['rak buku 1', 'rak buku 2', 'rak buku 3', 'rak buku 4', 'rak buku 5']


export default (req, res) => {
    const { type } = req.query

    if (type === 'users') {
        res.status(200).json(users)
    } else if (type === 'books') {
        res.status(200).json(books)
    } else if (type === 'categories') {
        res.status(200).json(categories)
    } else if (type === 'racks') {
        res.status(200).json(racks)
    }
}
