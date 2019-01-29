import * as React from 'react';
import { IEButtonProps } from './IButtonProps';
import { Button } from 'antd';

export class EButton extends React.Component<IEButtonProps, any> {
  constructor(props: IEButtonProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { label, ...rest } = this.props;
    return <Button {...rest}>{this.props.label}</Button>;
  }
}
