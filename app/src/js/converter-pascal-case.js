function PascalCaseToSentenceCase(string) {
  let result = string.replace(/([A-Z])/g, ' $1');
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
}

export { PascalCaseToSentenceCase };
