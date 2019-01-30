import * as React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { IDataGridProps } from './IDataGridProps';

export default class DataGrid extends React.Component<IDataGridProps, {}> {

  public render(): React.ReactElement<IDataGridProps> {
    return (
      <div>
        <ReactTable
          {...this.props}
        />
      </div>
    );
  }
}
