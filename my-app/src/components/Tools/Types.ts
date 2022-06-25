import { Accounts } from "@prisma/client"

export interface rowProps extends Accounts{
    isEditMode: boolean;
    [key: string]:any
  }

export type baseCellProps = {
    row: rowProps;
  };
export interface editableCellProps extends baseCellProps {
    onToggleEditMode: (id: string) => void;
    onRevert: (id: string) => void;
    ondeleteAccount:(id:string)=>void;
}

export type Props = {
  rows: rowProps[];
  setRows: React.Dispatch<React.SetStateAction<rowProps[]>>;
};
export interface celProps extends baseCellProps {
  name: string;
  onChange: (e: any, row: rowProps) => void;
  type:string
}
export type previousProps = {
  [keys: string]: rowProps;
};