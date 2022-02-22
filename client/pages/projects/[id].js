import Layout from "../../components/layout";
import { getProjectById, getProjectIds } from "../../shared/projects";

export default function Project({ project }) {
    return (
        <Layout>
            <div className="bg-gray-200">
                <div className="p-2 bg-white">
                    <h1 className="text-3xl my-5 font-bold text-center text-[#005C5C]">{project.name}</h1>
                    <div className="text-1xl">{project.content}</div>
                </div>
            </div>
        </Layout>)
}

export async function getStaticPaths() {
    const paths = await getProjectIds()
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const project = await getProjectById(params.id)
    return {
        props: {
            project
        }
    }
}