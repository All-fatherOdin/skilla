declare module "*.scss" {
  type ICassNames = Record<string, string>

  const className: ICassNames
  export = className
}

declare module "*.json"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg" {
  import React = require("react")
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}
