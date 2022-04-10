declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

type MouseEvents = {
  onClick?: React.MouseEventHandler;
}
