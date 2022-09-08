export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await res.json();

  const paths = datas.map((data) => {
    return {
      params: { id: data.id.toString(   ) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const NinjaId = ({ data }) => {
  return (
    <div>
      <h1>The Ninja id</h1>
      <h2>{data.name}</h2>
      <h2>{data.username}</h2>
      <h2>{data.email}</h2>
    </div>
  );
};

export default NinjaId;
