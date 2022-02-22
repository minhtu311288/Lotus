import Link from 'next/link';
import Layout from '../../components/layout'
import { getProjects } from '../../shared/projects';

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className='columns-1 px-2'>
        <h2 className='display-block text-3xl font-bold text-center text-[#005C5C] my-5'>Projects</h2>
        <div className='grid grid-cols-2 divide projects'>
          {projects.map(project => (
            <div key={project.id} className='border my-2 mx-2 p-2 shadow-sm hover:shadow-lg project-item'>
              <div className='w-100'><img className='object-contain h-60 xs:h-48 w-100 xs:w-96' src={project.image} /></div>
              <div className='font-bold'><Link href={`projects/${project.id}`}>{project.name}</Link></div>
              <div className='w-100'>{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()
  return {
    props: {
      projects
    },
  }
}