import Image from "next/image";
import Link from "next/link";
import client from "../client";

export default function LinkWrapper({ data }) {
  return <p>Test</p>;
}

export async function getInitialProps() {
  const posts = await client.fetch(
    `
                   *[_type == "header"][0{
                     _id
                   }
            
              `
  );

  return {
    props: {
      data,
    },
  };
}

// const LinkWrapper = (props) => {
//     return <p>PageTitle:{props._id}</p>;
//   };

//   LinkWrapper.getInitialProps = async function (context) {
//     // It's important to default the slug so that it doesn't return "undefined"
//     const { LinkWrapper = "" } = context.query;
//     return await client.fetch(
//       `
//       *[_type == "header"][0{
//           _id
//         }

//     `,
//       { LinkWrapper }
//     );
//   };
