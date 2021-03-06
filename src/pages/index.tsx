// const appdynamics = require("appdynamics");

// import { useEffect } from "react";

export default function Home(props) {
  // SPA
  // useEffect(() => {
  //   fetch("http://localhost:33333/episodes")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);
  console.log(props.episodes);

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

// SSR
// export async function getServerSideProps() {

// SSG
export async function getStaticProps() {
  const response = await fetch("http://localhost:33333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
