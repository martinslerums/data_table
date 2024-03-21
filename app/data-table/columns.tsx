"use client";

import { ColumnDef } from "@tanstack/react-table";
import DeleteCell from "@/components/DeleteCell";
import EditableCell from "@/components/EditableCell";


export type Disc = {
  id: string;
  name: string;
  type: string;
  difficulty: string;
};


const columns: ColumnDef<Disc>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: EditableCell,
  },
  {
    accessorKey: "manufacturer",
    header: "Manufacturer",
    cell: EditableCell,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: EditableCell,

  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    cell: EditableCell,
  },
  {
    id: "delete",
    cell: DeleteCell,
  },
];

export default columns;
