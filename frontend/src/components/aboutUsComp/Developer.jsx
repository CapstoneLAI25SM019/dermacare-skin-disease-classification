import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";

const Developer = () => {
  const { title, members } = aboutUsContent.team;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside">
        {members.map((member, index) => (
          <li key={index} className="mb-1">{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default Developer;
