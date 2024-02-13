import { Project } from "./model.js";

const project1 = await Project.create({
    name: 'E-Commerce Store',
    description:  `An ecommerce website that allows users to browse and purchase products online.`,
})