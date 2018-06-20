import { injectGlobal } from 'styled-components'

export default (id = 'root') => {
  injectGlobal`
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    #${id} {
      display: flex;
      flex-flow: column;
      height: 100%;
    }
  `
}
