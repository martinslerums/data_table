"use client";

import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [columnFilters, setColumnFilters] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setColumnFilters,
    state: {
      globalFilter: columnFilters,
    },
  });

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <div className="">
          <span className="text-sm">Select page size</span>
          <select
            className="text-sm"
            value={table.options.state.pagination?.pageSize}
            onChange={(event) =>
              table.setPageSize(parseInt(event.target.value))
            }
          >
            {[5, 10, 15, 20].map((pageSize) => {
              return (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <Input
            placeholder="Search table"
            value={columnFilters}
            onChange={(e) => setColumnFilters(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>
      <div className="rounded-md border grow">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerElement) => (
              <TableRow key={headerElement.id}>
                {headerElement.headers.map((columnElement) => {
                  return (
                    <TableHead key={columnElement.id}>
                      {flexRender(
                        columnElement.column.columnDef.header,
                        columnElement.getContext()
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="w-1/4 h-14" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center space-x-3 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
      </div>
    </>
  );
};

export default DataTable;
