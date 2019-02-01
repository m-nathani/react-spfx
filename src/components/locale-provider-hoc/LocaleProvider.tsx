import * as React from 'react';

import { ILocaleProviderProps } from './ILocaleProvider';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const withLocalProvider = <P extends object>(Component: React.ComponentClass<P>) =>
  class withLocaleProvider extends React.Component<P & ILocaleProviderProps, {}> {
    constructor(props: P & ILocaleProviderProps) {
      super(props);
    }
    public render(): React.ReactElement<P & ILocaleProviderProps> {
      return (
        <LocaleProvider locale={enUS}>
          <Component {...this.props} />
        </LocaleProvider>
      );
    }
  };

export default withLocalProvider;
