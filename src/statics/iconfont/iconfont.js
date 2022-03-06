import {createGlobalStyle} from 'styled-components'
import url1 from './iconfont.eot?t=1642780193810'
import url2 from './iconfont.eot?t=1642780193810#iefix'
import url3 from './iconfont.ttf?t=1642780193810'
import url4 from './iconfont.svg?t=1642780193810#iconfont'

export const FontStyle=createGlobalStyle`

@font-face {
  font-family: "iconfont"; /* Project id 3142780 */
  src: url(${url1}); /* IE9 */
  src: url(${url2}) format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
       url(${url3}) format('truetype'),
       url(${url4}) format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
