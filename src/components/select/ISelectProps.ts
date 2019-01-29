import { SelectProps, OptionProps } from 'antd/lib/select/';

export interface IESelectProps extends SelectProps {
  options: React.ClassicComponentClass<OptionProps>[] | any;
}
