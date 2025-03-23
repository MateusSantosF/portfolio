import { AnalyticsProviders } from "@/shared/components/AnalyticsProviders";
import { Fragment } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
      <AnalyticsProviders />
    </Fragment>
  );
}
