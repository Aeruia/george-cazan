const hobbies = [
    {
        img: `src/img/biking/biking-${randomIndex('biking')}.jpg`,
        name: "biking",
        label: "velo"
    },
    {
        img: `src/img/cooking/cooking-${randomIndex('cooking')}.jpg`,
        name: "cooking",
        label: "cuisine"
    },
    {
        img: `src/img/hiking/hiking-${randomIndex('hiking')}.jpg`,
        name: "hiking",
        label: "randonée"
    },
    {
        img: `src/img/history/history-${randomIndex('history')}.jpg`,
        name: "history",
        label: "histoire"
    },
]



function randomIndex(type) {
    const pictures = {
        biking: 2,
        cooking: 4,
        hiking: 4,
        history: 4
    }
    return Math.ceil(Math.random() * pictures[type]);
}

export default hobbies;