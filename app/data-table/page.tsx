import NewRecordForm from "@/components/Form";
import columns from "./columns";
import DataTable from "./data-table";

const getData = async () => {
  const response = await fetch(`http://localhost:3001/discs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch json server data`);
  }

  return response.json();
};

const DataTablePage = async () => {
  const data = await getData();

  return (
    <main>
      <div className="max-w-7xl mx-auto py-10 flex gap-4 items-center">
        <div className="grow ">
          <DataTable columns={columns} data={data} />
        </div>
        <NewRecordForm />
      </div>
    </main>
  );
};

export default DataTablePage;
