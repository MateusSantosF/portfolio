/* eslint-disable @typescript-eslint/no-explicit-any */
export const useMicrosoftClarity = () => {
  const clearClarityConsent = () => {
    (window as any)?.("consent", false);
  };

  const acceptClarityCookies = () => {
    (window as any)?.clarity("consent", true);
  };

  return {
    clearClarityConsent,
    acceptClarityCookies,
  };
};
