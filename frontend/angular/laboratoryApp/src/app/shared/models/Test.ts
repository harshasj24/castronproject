interface TestOutComes {
  outcomeTestName: string;
  outcomeTestValue: string;
}

interface Test {
  testName: string;
  testPrice: string;
  testOutComes: TestOutComes[];
}

export { Test };
