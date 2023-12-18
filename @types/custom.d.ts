/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     custom?: string;
//   }
// }