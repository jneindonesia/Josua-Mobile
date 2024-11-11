type TestId = {
  testID?: string;
  accessibilityLabel?: string;
};

export function getTestId(value?: string): TestId {
  return {
    testID: value,
    accessibilityLabel: value,
  };
}
