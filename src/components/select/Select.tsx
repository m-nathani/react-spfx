import * as React from 'react';
import { IESelectProps } from './ISelectProps';
import { Select } from 'antd';
import { OptionProps } from 'antd/lib/select';

export class ESelect extends React.Component<IESelectProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public items(): JSX.Element {
    const Option: React.ClassicComponentClass<OptionProps> = Select.Option;
    const options = this.props
      .options.map(
        (option: any) => {
          return (
            <Option disabled={option.disabled} key={option.key}>
              {option.value}
            </Option>
          );
        }
      );

    return options;
  }

  public render(): JSX.Element {
    const { mode, placeholder, ...rest } = this.props;
    return (
      <Select {...rest} mode={mode} placeholder={placeholder}>
        {this.items()}
      </Select>
    );
  }
}