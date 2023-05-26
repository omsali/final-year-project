function ProjectCard({ project }) {
  return (
    <div className="border border-gray-300 flex flex-col p-4 mb-6 rounded-lg gap-2">
      <p className="text-lg font-bold">{project.project_title}</p>
      <p>{project.project_description}</p>
      <div className="flex gap-4">
        <p className="underline text-sm cursor-pointer">See Code</p>
        <p className="underline text-sm cursor-pointer">See Project</p>
      </div>
    </div>
  );
}
export { ProjectCard };
