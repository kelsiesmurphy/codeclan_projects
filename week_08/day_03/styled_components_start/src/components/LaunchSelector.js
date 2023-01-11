import styled from 'styled-components'

const ButtonContainer = styled.div`
  background-color: #054569;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`

const Button = styled.button`
  font-size: 1em;
  padding: 1rem;
  margin: 0.5em;
  border: 2px solid #ced7e0;
  background: ${(props) => props.background || "#9ccddc"};
`

const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <ButtonContainer>
      <Button onClick={launchDecrease}>Previous Launch</Button>
      <Button background="#dcaa9d" onClick={launchIncrease}>Next Launch</Button>
    </ButtonContainer>
  )

}

export default LaunchSelector;