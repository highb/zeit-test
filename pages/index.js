import Layout from '../components/myLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Star Trek TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=star%20trek');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;

// Alternate ways of using components below:

// Higher-order component
// import withLayout from '../components/MyLayoutHigherOrder';

// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

// Property passed to component
// import Layout from '../components/MyLayoutProp.js';

// const indexPageContent = <p>Hello Next.js</p>;

// export default function Index() {
//   return <Layout content={indexPageContent} />;
// }
