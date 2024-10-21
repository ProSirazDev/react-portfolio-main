import React from 'react';
import './projects.css';

const projects = [
  {
    title: 'Track My Expense',
    description: 'One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Track My Expense',
    description: 'One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D_BRLjfd6sol0GkaB0LT2tU1E6-XQbaCaCFesI2_EnjyROEB1HQ0c_TloItBytvIt14&usqp=CAU',
    link: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Track My Expense',
    description: 'One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive.',
    image: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_06_project-reports.jpg',
    link: 'https://github.com/yourusername/project-three',
  },
];

const Projects = () => {
  return (
    <section className="py-20 " id="projects">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">My Projects</h2>
        <p className="text-lg text-center mb-12">Here are some of the projects I've worked on.</p>
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-2 gap-10 mb-12 shadow-lg hover:shadow-teal-500 rounded-lg overflow-hidden relative group  hover:scale-x-105 ease-linear duration-200">
            <div className=" p-6">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover shadow-lg rounded-md" />
            </div>
            <div className=" m-6 bg-white rounded-md  shadow-lg ">
              <div className='p-3'>
                <h3 className="text-2xl font-semibold mb-2 text-violet-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <div className='technology m-3 flex flex-wrap gap-3'>
               <span className=' border border-teal-500 rounded-full px-3 py-1 text-white text-sm bg-gradient-to-r from-teal-400 to-yellow-200'>HTML</span>
               <span className=' border border-teal-500 rounded-full px-3 py-1 text-white text-sm bg-gradient-to-r from-teal-400 to-yellow-200'>CSS</span>
               <span className=' border border-teal-500 rounded-full px-3 py-1 text-white text-sm bg-gradient-to-r from-teal-400 to-yellow-200'>React</span>
               <span className=' border border-teal-500 rounded-full px-3 py-1 text-white text-sm bg-gradient-to-r from-teal-400 to-yellow-200'>Node</span>
               <span className=' border border-teal-500 rounded-full px-3 py-1 text-white text-sm bg-gradient-to-r from-teal-400 to-yellow-200'>Tailwind</span>
               <span className=' border border-teal-500 rounded-full px-3 py-1 text-white text-sm bg-gradient-to-r from-teal-400 to-yellow-200'>HTML</span>
                
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
