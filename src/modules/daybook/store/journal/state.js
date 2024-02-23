export default()=>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //1212421
            date: new Date().toDateString(),// sat 23, julio
            text: 'Hola soy el mejor en el mundo pero ya se me esta acabando las ganas de vivir tengo muchos problemas pero me dicen que la vida es asi, asi que ni modo aguanytarse nomas no hay de otra psdt soy el mejor',
            picture: null,

        },
        {
            id: new Date().getTime()+ 1000, //1212421
            date: new Date().toDateString(),// sat 23, julio
            text: 'Hola soy el peor en el mundo pero ya se me esta acabando las ganas de vivir tengo muchos problemas pero me dicen que la vida es asi, asi que ni modo aguanytarse nomas no hay de otra psdt soy el mejor',
            picture: null,

        },
        {
            id: new Date().getTime()+ 2000, //1212421
            date: new Date().toDateString(),// sat 23, julio
            text: 'Hola soy el mas manco  en el mundo pero ya se me esta acabando las ganas de vivir tengo muchos problemas pero me dicen que la vida es asi, asi que ni modo aguanytarse nomas no hay de otra psdt soy el mejor',
            picture: null,

        },
    ]
})