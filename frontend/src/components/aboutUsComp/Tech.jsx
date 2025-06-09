import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";

const Tech = () => {
  const { title, stack } = aboutUsContent.tech;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside">
        {stack.map((tech, index) => (
          <li key={index} className="mb-1">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
