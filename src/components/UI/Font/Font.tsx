import React, { ReactNode } from 'react';
import fontStyles from './Font.style';

interface FontProps {
  children: ReactNode;
}

const Font: React.FC<FontProps> = ({ children }) => {
  return <div style={fontStyles.customFont}>{children}</div>;
};

export default Font;
