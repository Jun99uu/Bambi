declare module "*.svg" {
  import React from "react";
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

/// <reference types="gtag.js" />

declare module "gtag.js";
