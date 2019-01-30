import * as React from 'react';

import { IAuthorizationProps, IAuthorizationState } from './IAuthorization';
import Unauthorized from '../unauthorized/Unauthorized';
import { auth } from '../../services';

const withAuthorization = <P extends object>(Component: React.ComponentClass<P>) =>
  class withAuthorization extends React.Component<P, IAuthorizationState> {
    constructor(props: P & IAuthorizationProps) {
      super(props);
    }

    public onInitialize() {

    }

    public readonly state = {
      isAuthorized: false,
    }

    public render(): React.ReactElement<P & IAuthorizationProps> {
      const { ...props } = this.props as IAuthorizationProps;
      const { isAuthorized } = this.state;
      return isAuthorized ? <Unauthorized /> : <Component {...props} />;
    }
  };

export default withAuthorization;
