import { useForm } from "react-hook-form";
const Test = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="px-5 m-5">
      <form
        onSubmit={handleSubmit((data) => {
          return props.submit(data), reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="Discription">Discription</label>
          <input
            {...register("Discription", { required: true })}
            id="Discription"
            type="text"
            className="form-control mb-3"
          />
          {errors.Discription?.type === "required" && (
            <p className="text-danger">*Please write Discription</p>
          )}
          <label htmlFor="amout">amout</label>
          <input
            {...register("Amount", { required: true })}
            id="amout"
            type="number"
            className="form-control mb-3"
          />
          {errors.Amount?.type === "required" && (
            <p className="text-danger">*Please write amount</p>
          )}

          <label htmlFor="Category">Category</label>
          <select
            {...register("catagory")}
            className="form-control mb-3"
            id="Category"
          >
            {props.catagory.map((c) => {
              return (
                <option key={c} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
          <button className=" btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Test;
