import * as React from 'react';
import { IEInputNumberProps } from './IInputNumber';
import { InputNumber } from 'antd';

export class EInputNumber extends React.Component<IEInputNumberProps, any> {
  constructor(props: IEInputNumberProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { min, max, defaultValue, ...rest } = this.props;
    return (
      <InputNumber {...rest} min={min} max={max} defaultValue={defaultValue} />
    );
  }
}
