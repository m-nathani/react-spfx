import { DropDownProps } from 'antd/lib/dropdown/dropdown';

export interface IEDropdownProps extends DropDownProps {
  label: string;
  isButtonDropdown: Boolean;
}