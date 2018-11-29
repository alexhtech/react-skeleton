import * as React from 'react'
import { StyledButton } from './styled'
import Smile from './smile.svg'
import octocat from './Octocat.png'

const Test = () => (
    <div>
        <StyledButton>Button</StyledButton>
        <StyledButton red>Red Button</StyledButton>
        <Smile width="30px" height="30px" />
        <img src={octocat} width="200px" />
    </div>
)

export default Test
