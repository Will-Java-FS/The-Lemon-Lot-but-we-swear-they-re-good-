import CarTable from "@/components/table/inventory-table/page";

const InventoryManagement: React.FC = () => {
  return (
    <div className="registration-page">
      <h1 className="mb-8 text-2xl font-bold">Admin Portal</h1>
      <CarTable />
    </div>
  );
};
export default InventoryManagement;
