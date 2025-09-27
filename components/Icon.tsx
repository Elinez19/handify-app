import React from "react";

type IconConfig = {
  name: any;
  library: any;
};

interface IconProps {
  icon: IconConfig;
  size?: number;
  color?: string;
  style?: any;
}

export const Icon = ({ icon, size = 24, color = "#000", style }: IconProps) => {
  const IconComponent = icon.library;
  return (
    <IconComponent name={icon.name} size={size} color={color} style={style} />
  );
};
