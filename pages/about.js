// import Header from '../components/MyLayout';
// import Layout from '../components/MyLayout';

// export default function About() {
//   return (
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   );
// }

// Higher-order
// import withLayout from '../components/MyLayoutHigherOrder';

// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);

// Prop passed in
import Layout from '../components/MyLayoutProp';

const aboutPageContent = <p>This is the about page</p>;

export default function About() {
  return <Layout content={aboutPageContent} />;
}