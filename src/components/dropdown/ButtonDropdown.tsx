import * as React from 'react';
import { IEButtonDropdownProps } from './IButtonDropdownProps';
import { Menu, Dropdown } from 'antd';

export function dropDownButtonMenu(items: any): JSX.Element {
  return(
    <Menu>
      {
        items.map((item: any) => {
          return (
            <Menu.Item key={item.key} >{item.value}</Menu.Item>
          );
        })
      }
    </Menu>
    );
};

export class EButtonDropdown extends React.Component<IEButtonDropdownProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    const {overlay, ...rest} = this.props;

    return (
      <Dropdown.Button {...rest} overlay={overlay}>
        {this.props.label}
      </Dropdown.Button>
    );
  }
}
