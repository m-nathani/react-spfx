import * as React from 'react';
import { IEDropdownProps } from './IDropdown';
import { Menu, Dropdown, Icon, Button } from 'antd';

export function dropDownMenu(items: any): JSX.Element {
  return (
    <Menu>
      {items.map((item: any) => {
        return <Menu.Item key={item.key}>{item.value}</Menu.Item>;
      })}
    </Menu>
  );
}

export class EDropdown extends React.Component<IEDropdownProps, any> {
  constructor(props: IEDropdownProps) {
    super(props);
  }

  public renderButtonDropDown(): JSX.Element {
    return (
      <Button>
        {this.props.label} <Icon type='down' />
      </Button>
    );
  }

  public renderAnchorDropDown(): JSX.Element {
    return (
      <a className='ant-dropdown-link'>
        {this.props.label} <Icon type='down' />
      </a>
    );
  }

  public render(): JSX.Element {
    const { isButtonDropdown, overlay, ...rest } = this.props;

    return (
      <Dropdown {...rest} overlay={overlay}>
        {isButtonDropdown
          ? this.renderButtonDropDown()
          : this.renderAnchorDropDown()}
      </Dropdown>
    );
  }
}
