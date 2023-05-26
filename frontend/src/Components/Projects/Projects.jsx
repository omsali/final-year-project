import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  const [projectInput, setProjectInput] = useState({
    project_title: "",
    project_description: "",
    project_github_link: "",
    project_live_link: "",
  });
  const {
    project_title,
    project_description,
    project_github_link,
    project_live_link,
  } = projectInput;

  const [projects, setProjects] = useState([]);
  const addProject = () => {
    setProjects([...projects, projectInput]);
    setProjectInput({
      project_title: "",
      project_description: "",
      project_github_link: "",
      project_live_link: "",
    });
  };
  return (
    <div>
      <div className=" flex gap-16 mt-4">
        <div className="w-4/12">
          <p className="font-bold text-lg">Add a project</p>
        </div>
        <div className="w-full">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
          <div className="border border-neutral-300 p-6 rounded-lg">
            <input
              class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="project_title"
              type="text"
              placeholder="Project Title"
              value={project_title}
              onChange={(e) =>
                setProjectInput({
                  ...projectInput,
                  project_title: e.target.value,
                })
              }
            />
            <input
              class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="project_description"
              type="text"
              placeholder="Project Description"
              value={project_description}
              onChange={(e) =>
                setProjectInput({
                  ...projectInput,
                  project_description: e.target.value,
                })
              }
            />
            <input
              class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="project_github_link"
              type="text"
              placeholder="Project Github Link"
              value={project_github_link}
              onChange={(e) =>
                setProjectInput({
                  ...projectInput,
                  project_github_link: e.target.value,
                })
              }
            />
            <input
              class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="project_link_link"
              type="text"
              placeholder="Project Live Link"
              value={project_live_link}
              onChange={(e) =>
                setProjectInput({
                  ...projectInput,
                  project_live_link: e.target.value,
                })
              }
            />
            <div className="text-right mt-2 mb-2">
              <button
                className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right"
                onClick={() => addProject()}
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-6 mb-2">
        <button
          className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right"
          //   onClick={() => updateAchievementsHandler()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
export { Projects };
