import * as $styled from 'styled-components'

import { defaultTheme } from './theme'

const { css, keyframes, ThemeProvider, withTheme, default: styled } = $styled as $styled.ThemedStyledComponentsModule<
    typeof defaultTheme
>

export { css, keyframes, ThemeProvider, withTheme }
export default styled
