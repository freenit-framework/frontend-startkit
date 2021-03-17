import React from 'react'
import PropTypes from 'prop-types'
import { StoreProvider } from 'freenit'
import { MemoryRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { Style } from 'radium'

import store from 'store'
import Routing from 'routing'
import theme from 'theme'
import styles from 'styles'


const TestApp = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Style rules={styles} />
      <Router initialEntries={[props.path]} initialIndex={0}>
        <StoreProvider store={store}>
          <Routing />
        </StoreProvider>
      </Router>
    </ThemeProvider>
  )
}


TestApp.propTypes = {
  path: PropTypes.string.isRequired,
}


export default TestApp
