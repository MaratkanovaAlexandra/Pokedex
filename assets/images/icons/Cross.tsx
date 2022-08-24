import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Cross = () => (
  <Svg width={8} height={8} fill="none">
    <Path
      fill="#666"
      d="M4.849 4l2.564-2.564.528-.529a.2.2 0 000-.282L7.377.059a.2.2 0 00-.283 0L4 3.152.907.059a.2.2 0 00-.282 0L.059.624a.2.2 0 000 .283L3.152 4 .059 7.093a.2.2 0 000 .283l.565.565a.2.2 0 00.283 0L4 4.85l2.564 2.564.529.528a.2.2 0 00.283 0l.565-.565a.2.2 0 000-.283L4.85 4z"
    />
  </Svg>
)
