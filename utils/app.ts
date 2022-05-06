import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Less Borders',
    author: {
      name: 'Less Borders',
      link: 'https://github.com/lessborders',
    },
  }
  useState('app', () => app)

  // use language manager
  const languageManager = LanguageManager()

  return {
    app,
    languageManager,
  }
}
