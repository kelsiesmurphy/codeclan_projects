import styled from 'styled-components'

const Details = styled.div`
  background-color: #ced7e0;
  padding: 1rem;
`

const Paragraph = styled.p`
  color: #062c43;
  padding: 1rem;
  margin: 0;
`

const BigParagraph = styled(Paragraph)`
  font-size: 1.5em;
  padding: 0.5em;
  border-bottom: 1px solid #062c43;
`

const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <Details>
      <BigParagraph>{launch.mission_name}</BigParagraph>
      <Paragraph>Flight Number: {launch.flight_number}</Paragraph>
      <Paragraph>Year: {launch.launch_year}</Paragraph>
      <Paragraph>Rocket: {launch.rocket.rocket_name}</Paragraph>
      <Paragraph>Details of launch: {launch.details}</Paragraph>
    </Details>
  )

}

export default LaunchDetails;