import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Disc } from "@/app/data-table/columns";



type EditableCellProps = {
  getValue:  () => any;
  row: Row<Disc>
  column: ColumnDef<Disc>;
}


const EditableCell = ({ getValue, row, column }: EditableCellProps) => {
  const router = useRouter();
  const initialValue = getValue();

  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();

    const { id } = row.original;

    const response = await fetch(`http://localhost:3001/discs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      // @ts-ignore
      body: JSON.stringify({ [column.columnDef.accessorKey]: value }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update record ID: ${id}. Status: ${response.status}`
      );
    }

    router.refresh();
    setIsEditing(false);

    return;
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  return (
    <div className="cursor-pointer" onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <div className="flex">
          <form onSubmit={handleSave} className="flex">
            <Input
              className="p-0 px-1 m-0 h-auto "
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <Button type="submit" variant="ghost" className="p-0 h-auto px-2">
              <FaCheck size={16} />
            </Button>
          </form>
          <Button
            className="p-0 h-auto px-2"
            type="button"
            variant="ghost"
            onClick={(event) => {
              event.stopPropagation();
              handleCancel();
            }}
          >
            <FaXmark size={16} />
          </Button>
        </div>
      ) : (
        <div>{initialValue}</div>
      )}
    </div>
  );
};

export default EditableCell;
