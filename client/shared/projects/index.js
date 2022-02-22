export const getProjects = () => {
    try {
        const projects = [
            { id: 0, name: "Minigame blockchain", description: "Mô tả ngắn về Minigame blockchain", content: "Content", image: "images/Decentralized-Application-on-the-Blockchain.jpg" },
            { id: 1, name: "Swap token", description: "Mô tả ngắn về Swap token", content: "content", image: "images/Decentralized-Application-on-the-Blockchain.jpg" },
            { id: 2, name: "Shop mini", description: "Mô tả ngắn về Shop mini", content: "content", image: "images/Decentralized-Application-on-the-Blockchain.jpg" },
            { id: 3, name: "Stake token", description: "Mô tả ngắn về Stake token", content: "content", image: "images/Decentralized-Application-on-the-Blockchain.jpg" },
        ]
        return projects;
    } catch (error) {
        console.error(error)
    }
}

export const getProjectIds = async () => {
    const projects = await getProjects()
    return projects.map(project => ({
        params: {
            id: `${project.id}`
        }
    }))
}

export const getProjectById = async (id) => {
    const projects = await getProjects()
    return projects[id]
}