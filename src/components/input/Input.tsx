import * as React from 'react';
import { IEInputProps } from './IInput';
import { Input } from 'antd';

export class EInput extends React.Component<IEInputProps, any> {
  constructor(props: IEInputProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <Input {...this.props} />;
  }
}
