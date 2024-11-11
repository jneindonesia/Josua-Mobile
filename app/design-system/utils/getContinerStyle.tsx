import { Dimensions, ViewStyle } from 'react-native';
const { width } = Dimensions.get('window');

const maxNumber = 12;
const DEFAULT_MARGIN = 8;

function getPadding(sm: number): number {
  return (sm / maxNumber) * 16;
}

export function getContinerStyle(
  container: { sm?: number; marginVertical?: number } | null | undefined
): ViewStyle {
  const { sm = maxNumber } = container ?? {};
  return {
    width: (sm / maxNumber) * width - getPadding(sm),
    paddingHorizontal: 8,
    marginVertical: DEFAULT_MARGIN,
  };
}

export function getContinerStyleAsGroup(container: { sm?: number } | null | undefined): ViewStyle {
  const { sm = maxNumber } = container ?? {};
  return {
    width: (sm / maxNumber) * width - getPadding(sm),
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  };
}

export function getRandomColor(): string {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}
