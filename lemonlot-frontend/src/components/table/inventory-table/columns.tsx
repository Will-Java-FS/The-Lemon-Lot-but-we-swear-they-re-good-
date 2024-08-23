import { ColumnDef } from "@tanstack/react-table";

 type Seller = {
   id: number;
   // other seller fields
 };

export type Car = {
  id: number;
  make: string;
  model: string;
  modelYear: number;
  price: number;
  color: string;
  mileage?: number;
  description?: string;
  seller: Seller;
};


export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "modelYear",
    header: "Year",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "mileage",
    header: "Mileage",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const car = row.original;
      console.log(car);
      return (
        <div>
          {/* Implement actions, such as edit and delete, here */}
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    },
  },
];
