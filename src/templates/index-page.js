/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill
} from "react-icons/ri"
import { FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"
import { Box, Text } from "theme-ui"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
        {icons.icon === "facebook" ? (
          <Link to={icons.url} target="_blank">
            <RiFacebookBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <Link to={icons.url} target="_blank">
            <RiTwitterFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <Link to={icons.url} target="_blank">
            <RiLinkedinBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <Link to={icons.url} target="_blank">
            <RiYoutubeFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <Link to={icons.url} target="_blank">
            <RiInstagramFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "rss" ? (
          <Link to={icons.url} target="_blank">
            <RiRssFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <Link to={icons.url} target="_blank">
            <RiGithubFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <Link to={icons.url} target="_blank">
            <RiTelegramFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <Link to={icons.url} target="_blank">
            <RiPinterestFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <Link to={icons.url} target="_blank">
            <RiSnapchatFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <Link to={icons.url} target="_blank">
            <RiSkypeFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <Link to={icons.url} target="_blank">
            <FaWordpress />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "dribbble" ? (
          <Link to={icons.url} target="_blank">
            <RiDribbbleFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <Link to={icons.url} target="_blank">
            <RiMediumFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "behance" ? (
          <Link to={icons.url} target="_blank">
            <RiBehanceFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "vk" ? (
          <Link to={icons.url} target="_blank">
            <FaVk />
          </Link>
        ) : (
          ""
        )}
      </div>
    )
  })
  return (
    <Layout>
      <Seo />
      <Box
        sx={{
          position: "relative",
          height: "500px",
          width: "100wh",
          backgroundSize: "100%",
          backgroundPositionY: "50%"
        }}
      >
        <Box
          sx={{
            height: "500px",
            right: "0",
            width: "50%",
            position: "absolute",
            zIndex: "-1",
            background: `linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1)
          ), url(/assets/pexels-adrien-olichon-3137058.jpeg)`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "50%"
          }}
        />
        <Box
          sx={{
            height: "500px",
            left: "0",
            width: "50%",
            position: "absolute",
            zIndex: "-1",
            transform: "rotateY(180deg)",
            background: `linear-gradient(
              rgba(255, 255, 255, 0),
              rgba(255, 255, 255, 1)
          ), url(/assets/pexels-adrien-olichon-3137058.jpeg)`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "50%"
          }}
        />
        <Box
          bg={"white"}
          sx={{
            position: "absolute",
            zIndex: "-1",
            left: "50%",
            right: "50%",
            top: "100%",
            height: "1000px",
            width: "100%",
            transform: "translate(-50%,-50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(255,255,255,0.5) 60%,rgba(255,255,255,0.7) 80%, rgba(255,255,255,0) 100%)"
          }}
        ></Box>
        <Box pt={100} sx={{ textAlign: "center" }}>
          <Text as={"h1"} sx={{ fontSize: 8 }}>
            Krishna Sagar R
          </Text>
          <Text as={"p"} p={10} sx={{ fontSize: 4 }}>
            Technical Architect, Web3 and Data Science Enthusiast
          </Text>
          <Text as={"p"} sx={{ fontSize: 4 }}>
            Specalized in digital user interfaces
          </Text>
        </Box>
      </Box>
      <Box sx={{}}>
        <Text
          as={"p"}
          pt={100}
          sx={{
            fontSize: 4,
            textAlign: "center",
            margin: "0 auto"
          }}
          className="container"
        >
          Software architecture is not just about working software. It heaveily
          influences how an individual or a team makes informed decisions;
          hence, it has a significant cultural impact on the organisation. Such
          architecture should be carefully crafted as a fabric of agility.
        </Text>
      </Box>

      <Text
        as={"p"}
        pt={100}
        sx={{ fontSize: 4, textAlign: "center", margin: "0 auto" }}
        className="container"
      >
        I first understand the vision and value proposition of your product or
        project. Then I will set the technology roadmap to achieve near term and
        long-term goals of the organisation. And create an evolutionary
        architecture for the front end.
      </Text>

      <Text
        as={"p"}
        pt={100}
        sx={{ fontSize: 4, textAlign: "center", margin: "0 auto" }}
        className="container"
      >
        With the convergence of designers, developers and business thinking, I
        will empathise needs and wants and connect the dots to create a
        satisfying experience with user analytics, design systems, performance
        and business editing tools.
      </Text>

      <Text
        as={"p"}
        pt={100}
        sx={{ fontSize: 4, textAlign: "center", margin: "0 auto" }}
        className="container"
      >
        I'm a visionary engineer who helps organisations build the future with
        resilient and highly scalable software architecture with cloud
        infrastructure and helps move towards the long-term vision.
      </Text>

      <Box className={"container"} pt={100} sx={{ margin: "0 auto" }}>
        <BlogListHome data={posts} />
      </Box>
    </Layout>
  )
}

export default HomePage
