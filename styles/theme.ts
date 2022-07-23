import { createTheme } from '@mui/material/styles';
import { Palette, Theme } from '@mui/material';
import settings from './settings'


function addToObject(obj:any, key:string, value:any) {
  return obj[key]=value
}


export function traverseObject(palette: any, parent?:string) {
  const keys = Object.keys(palette)
  let vars = {}

  keys.forEach(key => {
    const item = palette[key]
    switch (typeof item) {
      case "string":
      case "number":
        // debugger
        let id = '--rsd'
        if (parent) {
          id += `-${parent}`
        }
        id += `-${key}`
        addToObject(vars, id, item)
        break;
      case "object":
        const children = traverseObject(item, key)
        vars = {
          ...vars,
          ...children
        }
        break;
      case "function":
      default:
        // skip thisone
    }
  })

  return vars

}


export function getCssVarsFromTheme(theme: Theme) {
  console.log("getCssVarsFromTheme.theme...", theme)
  const vars = traverseObject(theme.palette)
  return {
    ':root': vars
  }
  // {
  //   ':root': {
  //     '--rsd-primary-test': 'red',
  //     '--rsd-secondary-test': 'green',
  //     '--rsd-accent-test': 'blue',
  //     '--rsd-accent-main': 'darkblue'
  //   }
  // }
}

export function muiTheme(mode: 'light'|'dark') {

  const colors = settings.theme[mode].colors

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      error: {
        main: colors.error,
      },
    },
  });

  return theme
}
