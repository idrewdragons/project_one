const Loki = (props) => {
  const { img, title, description, number } = props;
  console.log(number);
  return (
    <article className="loki">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{description} </h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Loki;
