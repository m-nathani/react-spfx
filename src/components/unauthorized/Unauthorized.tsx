import * as React from 'react';

import { IUnauthorizedProps } from './IUnauthorizedProps';

export default class Unauthorized extends React.PureComponent<IUnauthorizedProps, {}> {
  public render(): React.ReactElement<IUnauthorizedProps> {
    return (
      <div>
        <h1> UNAUTHORIZED </h1>
      </div>
    );
  }
}
