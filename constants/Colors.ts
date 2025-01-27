/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const neutral = {
  '100':'#EAEBEA',
  '200':'#BFC2BF',
  '300':'#959994',
  '400':'#555C54',
  '500':'#2B3329',
  '600':'#222921',
  '700':'#1A1F19',
  '800':'#111410',
  '900':'#090A08'
};
const brand = {
    '100':'#DAF4D5',
    '200':'#B5EAAA',
    '300':'#90DF80',
    '400':'#6BD555',
    '500':'#46CA2B',
    '600':'#38A222',
    '700':'#2A791A',
    '800':'#1C5111',
    '900':'#0E2809'
};
const success = {
    '100':'#DEFDD88',
    '200':'#BEFBB1',
    '300':'#9DF98B',
    '400':'#7DF764',
    '500':'#5CF53D',
    '600':'#4AC431',
    '700':'#379325',
    '800':'#256218',
    '900':'#12310C'
};
const warning = {
    '100':'#FDF1D8',
    '200':'#FBE3B1',
    '300':'#F8D68A',
    '400':'#F6C863',
    '500':'#F4BA3C',
    '600':'#C39530',
    '700':'#927024',
    '800':'#624A18',
    '900':'#31250C'
};
const danger = {
    '100':'#FDD8D8',
    '200':'#FBB1B1',
    '300':'#F88A8A',
    '400':'#F66363',
    '500':'#F43C3C',
    '600':'#C33030',
    '700':'#922424',
    '800':'#621818',
    '900':'#310C0C'
};
const information = {
    '100':'#D8F2FD',
    '200':'#B1E5FB',
    '300':'#8AD7F8',
    '400':'#63CAF6',
    '500':'#3CBDF4',
    '600':'#3097C3',
    '700':'#247192',
    '800':'#184C62',
    '900':'#0C2631'
};
export const Colors = {
  light: {
    background: neutral[100],
    text: neutral[700],
    subtitle: neutral[600],
    icon: brand[500],
    link: brand[500],
  },
  dark: {
    background: neutral[700],
    text: neutral[100],
    subtitle: neutral[200],
    icon: brand[500],
    link: brand[500]
  },
  sucess: success,
  warning: warning,
  danger: danger,
  information: information
};
