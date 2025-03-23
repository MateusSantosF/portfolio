import { Fragment } from "react";
import MicrosoftClarity from "../MicrosoftClarity";
import { GoogleAnalytics } from "@next/third-parties/google";

import { env } from "process";
import CookieBanner from "../CookieBanner";

export function AnalyticsProviders() {
  if (env.NODE_ENV === "development") return null;

  return (
    <Fragment>
      <MicrosoftClarity />
      <GoogleAnalytics gaId="G-VG51S5DCCV" />
      <CookieBanner />
    </Fragment>
  );
}
