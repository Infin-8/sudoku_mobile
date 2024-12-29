export const getStartButtons = () => [
    { filter: "easy", color: "#8fd3ae", value: "Easy" },
    { filter: "medium", color: "#7cbf9a", value: "Medium" },
    { filter: "hard", color: "#6ba588", value: "Hard" }
]


export const getBoards = () => Array.from({ length: 100 }, (_, i) => (i + 1))

export const testString = (item) => item != null ? item.toString() : String(Math.random())