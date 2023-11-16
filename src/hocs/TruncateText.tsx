import React, { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

interface Props {
  children: ReactElement;
  textLength?: number;
}

export const TruncateText: React.FC<Props> = ({
  children,
  textLength = 10,
}) => {
  if (textLength < 0) {
    return <>{children}</>;
  }
  const stringHTML = renderToStaticMarkup(children);
  const element = new DOMParser().parseFromString(stringHTML, 'text/html').body
    .firstChild;

  const innerHTMLArray = element.innerHTML.split('');
  innerHTMLArray.length = textLength;
  element.innerHTML = innerHTMLArray.join('');

  return <>{element.outerHTML}</>;
};
