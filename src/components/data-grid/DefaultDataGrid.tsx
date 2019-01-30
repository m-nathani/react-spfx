import * as React from 'react';

import { IDataGridProps } from './IDataGridProps';
import DataGrid from './DataGrid';

export default class DefaultDataGrid extends React.Component<IDataGridProps, {}> {

  public render(): React.ReactElement<IDataGridProps> {
    return (
      <div>
        <DataGrid
          manual
          showPageSizeOptions={false}
          multiSort={false}
          filterable={false}
          {...this.props}
        />
      </div>
    );
  }
}
