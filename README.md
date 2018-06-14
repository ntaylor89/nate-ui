# Nate-UI

My personal UI Toolkit for React-based apps.
Built with [Rebass](https://github.com/jxnblk/rebass).

## Getting Started

To hook this into your app, import `ThemeProvider` and wrap your whole app with it

```jsx
import { ThemeProvider } from 'nate-ui'

export default () =>
  <ThemeProvider>
    {...}
  </ThemeProvider>
```

The default theme can be overridden if necessary:

```jsx
import { theme, ThemeProvider } from 'nate-ui'

const myTheme = {
  ...theme,
  ...{ colors: { blue: '#4286f4' }
  }
}

export default () =>
  <ThemeProvider theme={myTheme}>
    {...}
  </ThemeProvider>

```

## Components

You can import any vanilla component from Rebass, but a few have been extended:

- Blockquote
- Button
- ButtonOutline
- Divider
- Input
- Select

A few composites have also been created:
- NavBar
- Footer
- MD (for use with MDX / Markdown formatting)

And a few "alternative" tags with useful props have been created via [system-components](https://github.com/jxnblk/system-components):

- Dd
- Dl
- Dt

```jsx
<Dl>
  <Dt display='none'>Name</Dt>
  <Dd center={true}>Nate</Dd>
</Dl>
```

## Contributing
- Fork It
- Create a feature branch
- Commit your stuff
- Open a PR

## License
MIT

