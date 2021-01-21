const Data = require('./db')
const createProffy = require('./createProffy')

Data.then(async (db) =>{
    proffyValue = {
        name: 'Remy chef',
        avatar: 'https://vignette.wikia.nocookie.net/disney/images/7/73/Profile_-_Remy.jpeg/revision/latest?cb=20190314174151',
        whatsapp: '0010101010101',
        bio: 'cozinheiro chef em paris frança, massas e comigo mesmo',
    }

    classValue  = {
        subject: 11,
        cost: '55,00'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 420,
            time_to: 1000
        },

        {
            weekday: 4,
            time_from: 500,
            time_to: 750
        }


    ]

//    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    
    
    // const selectClassesAndProffys = await db.all(`
    //     SELECT classes.*, proffys.*
    //     FROM proffys
    //     JOIN classes ON (classes.proffy_id = proffys.id)
    //     WHERE classes.proffy_id = 1;

    // `)

    // // console.log(selectClassesAndProffys)

    // const selectClassesSchedules = await db.all(`
    //     SELECT class_schedule.*
    //     FROM class_schedule
    //     where class_schedule.class_id = 1
    //     AND class_schedule.weekday = 1
    //     AND class_schedule.time_from <= 320
    //     AND class_schedule.time_to > 320  
    // `)
    // console.log(selectClassesSchedules)

})

const proffys = [
    {
        name:"Gabriel Bryan",
        avatar: "https://instagram.fplu20-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92952220_703715553791195_7343139112485912576_n.jpg?_nc_ht=instagram.fplu20-1.fna.fbcdn.net&_nc_ohc=lJbgYOIx9o4AX8j_Zn3&oh=91370b2376e727a4648af312bce3030a&oe=5F56821C",
        whatsapp:"982003041",
        bio: "Entusiasta em java avançada.Apaixonado por criar gestão tarefas e por mudar a vida das pessoas com piadas engraçadas. Mais de 50 pessoas já ouviram uma das minhas melhores piadas.",
        subject: "Programador",
        cost:"5",
        weekday:[
            4
        ],
        time_from:[
            720
        ],
        time_to:[
            1220
        ]
    },
    {
        name:"Luana emanuela",
        avatar: "/assets/mozns.jpeg",
        whatsapp:"982003041",
        bio: "Entusiasta em design avançada.Apaixonado por criar arte de aniversario e por mudar a vida das pessoas com artes de aniversario. Mais de 3 pessoas já viram uma das minhas obras.",
        subject: "Design",
        cost:"20,00",
        weekday:[
            6
        ],
        time_from:[
            850
        ],
        time_to:[
            1000
        ]
    },
    {
        name:"Moises Rodrigues",
        avatar: "/assets/pp.jpeg",
        whatsapp:"982003041",
        bio: "Entusiasta em teologia avançada.Apaixonado por criar sermoes para mudar a vida das pessoas. Muitas pessoas já ouviram um deles.",
        subject: "Filosofia",
        cost:"40,00",
        weekday:[
            4
        ],
        time_from:[
            750
        ],
        time_to:[
            1300
        ]
    }
]