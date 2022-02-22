import Link from 'next/link';

import Layout from '../components/layout'
import Message from '../components/message'
import { getProjects } from '../shared/projects';

export default function Index({ arrMessage, projects }) {
  return (
    <Layout>
      <div className="container-full mx-auto">
        <div className='columns-1 md:columns-2 backdrop-header'>
          <div className='my-10 w-full table-header-group'>
            <Message arrMessage={arrMessage} />
            <div className='flex'>
              <button className='m-auto bg-amber-700 text-white p-2 rounded inline-flex items-center justify-center'>Xem thêm</button>
            </div>
          </div>
          <div id='man_bg' className='w-full coding table-header-group'><img src='../images/coding.png' alt='coding' /> </div>
        </div>
        <div className='columns-1 px-2'>
          <h2 className='display-block text-xl'>Projects</h2>
          <div className='grid grid-cols-2 divide projects'>
            {projects.map(project => (
              <div key={project.id} className='border my-2 mx-2 p-2 shadow-sm hover:shadow-lg project-item'>
                <div className='w-100'><img className='object-contain h-60 xs:h-48 w-100 xs:w-96' src={project.image} /></div>
                <div className='font-bold'><Link href={`/projects/${project.id}`}>{project.name}</Link></div>
                <div className='w-100'>{project.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // static data will replace by API later
  const arrMessage = [
    { id: 0, name: "Đây là pet project của Tú, sử dụng Nextjs ở front end và nodejs ở back end" },
    { id: 1, name: "Hãy click button ở dưới để xem thêm thông tin về các projects mà Tú đã làm nhé." },
    { id: 2, name: "Website này được tạo với mục đích để tôi tự học hỏi công nghệ mà tôi yêu thích." }
  ]
  const projects = await getProjects()
  return {
    props: {
      arrMessage,
      projects
    }, // will be passed to the page component as props
  }
}