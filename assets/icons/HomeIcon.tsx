import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Svg, {Circle, Defs, G, Line, Path} from 'react-native-svg';

type Prop = {
  color?: string;
  height?: string;
  width?: string;
};

const HomeIcon: React.FunctionComponent<Prop> = ({color, height, width}) => {
  return (
    <Svg width={width ?? '32'} height={height ?? '32'} viewBox="0 0 32 32">
      <G
        id="vuesax_outline_home-2"
        data-name="vuesax/outline/home-2"
        transform="translate(-620 -188)"
        opacity="0.6">
        <G id="home-2">
          <Path
            id="Vector"
            d="M16.54,21.477H4.96A4.968,4.968,0,0,1,0,16.507V9.1a5.5,5.5,0,0,1,1.92-3.91L7.31.987A5.2,5.2,0,0,1,13.2.847l6.18,4.33a5.463,5.463,0,0,1,2.12,4.06v7.28A4.966,4.966,0,0,1,16.54,21.477ZM8.23,2.167l-5.39,4.2A4.064,4.064,0,0,0,1.5,9.1v7.41a3.47,3.47,0,0,0,3.46,3.47H16.54A3.461,3.461,0,0,0,20,16.517V9.237a3.968,3.968,0,0,0-1.48-2.83l-6.18-4.33A3.722,3.722,0,0,0,8.23,2.167Z"
            transform="translate(621.25 189.273)"
            fill={color ?? '#292d32'}
          />
          <Path
            id="Vector-2"
            data-name="Vector"
            d="M.75,4.5A.755.755,0,0,1,0,3.75v-3A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v3A.755.755,0,0,1,.75,4.5Z"
            transform="translate(631.25 202.25)"
            fill={color ?? '#292d32'}
          />
          <Path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(620 188)"
            fill="none"
            opacity="0"
          />
        </G>
      </G>
    </Svg>
  );
};

export default HomeIcon;

const styles = StyleSheet.create({});
