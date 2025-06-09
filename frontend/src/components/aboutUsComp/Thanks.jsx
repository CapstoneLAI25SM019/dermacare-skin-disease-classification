import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";

const Thanks = () => {
  const { title, message } = aboutUsContent.thanks;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-justify whitespace-pre-line">{message}</p>
    </div>
  );
};

export default Thanks;
