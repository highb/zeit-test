import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}

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
