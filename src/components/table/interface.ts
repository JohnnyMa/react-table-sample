export interface TableColumn {
  name: string;
  key: string;
  sortable: boolean;
  width: number;
}

export interface TableProps {
  data: any[];
  columns: TableColumn[];
  defaultPageSize?: number;
  fixedLeftColumns?: number;
  fixedRightColumns?: number;
}
