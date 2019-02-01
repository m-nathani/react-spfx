import * as React from 'react';

import AuthHOC from '../authorization-hoc/Authorization';
import LocaleHOC from '../locale-provider-hoc/LocaleProvider';

export default (Component: React.ComponentClass<any>): React.ComponentClass<any> => AuthHOC(LocaleHOC(Component));
