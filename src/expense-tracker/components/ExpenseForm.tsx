import React from "react";
import categories from "../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be atleast 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  categories: z.enum(categories, {
    errorMap: () => ({ message: "Categroy is required." }),
  }),
});

type ExpenseFromData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFromData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label
          {...register("description")}
          htmlFor="Description"
          className="form-label"
        >
          Description
        </label>
        <input type="text" className="form-control" />
        {errors.description && (
          <p className="text-danger">{errors.description?.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label
          {...(register("amount"), { valuesAsNumber: true })}
          htmlFor="amount"
          className="form-label"
        >
          Amount
        </label>
        <input type="number" className="form-control" />
        <p className="text-danger">{errors.amount?.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <select
          {...register("categories")}
          id="Category"
          className="form-select"
        >
          <option value=""></option>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <p className="text-danger">{errors.categories?.message}</p>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
