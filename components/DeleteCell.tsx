import { Disc } from "@/app/data-table/columns";
import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { RiDeleteBinFill } from "react-icons/ri";

const DeleteCell: React.FC<{ row: Row<Disc> }> = ({ row }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const response = await fetch(`http://localhost:3001/discs/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete: ${id}. Status: ${response.status}`);
    }
    router.refresh();
  };

  return (
    <RiDeleteBinFill
      className="text-center cursor-pointer"
      size={20}
      onClick={() => handleDelete(row.original.id)}
    />
  );
};

export default DeleteCell;