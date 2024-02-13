import { Project } from './db/model.js'

const handlerFunctions = {

    getProjects: async(req, res) => {
        const allProjects = await Project.findAll()
        res.send(allProjects)
    }
}

export default handlerFunctions