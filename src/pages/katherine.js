import React from "react";
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import moment from "moment"

const Background = styled.div`
background-image:
    linear-gradient(to right, #2C5364AA, #203A43AA, #0F2027AA), url("${props => props.url}");
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
`


const Hero = styled.div`
color: white;
display: flex;
align-items: center;
justify-content: center;
 height: 100%;
`

const Bigg = styled.h1`
  font-size: 100px;
`


const Katherine = ({ background }) => {

  const now = new moment();
  const end = new moment("20210123", "YYYYMMDD");
  const timestr = moment.duration(end.diff(now)).as('days')


  return (
    <Background url={background}>
      <Hero>
        <Bigg>{~~timestr} days</Bigg>
      </Hero>
      <embed></embed>

    </Background>
  )
}



export default ({ data }) => {
  const photos = data.prismic.allKatherinephotoss.edges;
  const background = photos[~~(photos.length * Math.random())].node.photo.url;
  if (!background) return null;

  return (
    <Katherine background={background} />
  )
}

export const query = graphql`
{
  prismic {
    allKatherinephotoss {
      edges {
        node {
          title
          photo
          _linkType
        } 
      }
    }
  }
}
`
