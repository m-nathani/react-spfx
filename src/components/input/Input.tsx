import * as React from 'react';
import { IEInputProps } from './IInputProps';
import { Input } from 'antd';

export class EInput extends React.Component<IEInputProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    return <Input {...this.props} />;
  }
}
