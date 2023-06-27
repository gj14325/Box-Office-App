export default function AppTitle(props) {
  const {
    title = 'Box-Office',
    subTitle = 'Are you looking for a movie OR an Actor',
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}
