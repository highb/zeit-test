// This is the Link API
// import Header from '../components/Header';
// import Layout from '../components/MyLayout';

// const Index = () => (
//   <Layout>
//     <p>Hello Next.js</p>
//   </Layout>
// );

// export default Index;

// Higher-order component
// import withLayout from '../components/MyLayoutHigherOrder';

// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

// Property passed to component
import Layout from '../components/MyLayoutProp.js';

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}
