import { createTheme } from '@mui/material/styles';
import { Palette, Theme } from '@mui/material';
import settings from './settings'


export function traverseObject(palette: any, parent?:string) {
  const keys = Object.keys(palette)
  let vars:any = {}

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
        // addToObject(vars, id, item)
        vars[id]=item
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

export function applyCssVarsToPallete(palette:any,parent?:string) {
  const keys = Object.keys(palette)
  let vars: any = {}

  keys.forEach(key => {
    // debugger
    let item = palette[key]
    switch (typeof item) {
      case "string":
      case "number":
        // debugger
        let id = '--rsd'
        if (parent) {
          id += `-${parent}`
        }
        id += `-${key}`
        // addToObject(vars, id, item)
        palette[key] = `var(${id},${item})`
        // vars[key] = `var(${id},${item})`
        break;
      case "object":
        palette[key] = applyCssVarsToPallete(item, key)
        break;
      case "function":
      default:
      // skip thisone
    }
  })
  debugger
  return palette
}
