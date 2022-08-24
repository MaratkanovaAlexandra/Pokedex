import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const Arrow = () => (
  <Svg width="9" height="16" fill="none">
    <Path
      fill={colors.darkGray}
      d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606z"
    />
  </Svg>
)
