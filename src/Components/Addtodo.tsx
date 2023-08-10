import { useForm } from "react-hook-form";
import { z } from "zod";
import { connect, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "react-bootstrap";
import { addTodo } from "../ReduxToolkit/Slices/todoslice";

const schema = z.object({
  name: z.string().min(4, { message: "Enter name longer tha 3" }),
  description: z
    .string()
    .min(10, { message: "Enter Proper Description More than 10 letters" }),
});

type todoFormData = z.infer<typeof schema>;

const Addtodo = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: todoFormData) => {
    console.log(data);
    dispatch(addTodo(data));
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<todoFormData>({ resolver: zodResolver(schema) });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit((data) => {
        onSubmit(data);
        reset();
      })();
    }
  };

  return (
    <>
      <h4 style={{ textAlign: "center", marginTop: "4px" }}>
        ADD Items Into List
      </h4>
      <Container
        className="mt-5 shadow-lg"
        style={{
          padding: "20px",
          border: "4px solid orange",
          borderRadius: "7px",
        }}
      >
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            ></input>
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              rows={4}
              id="description"
              {...register("description")}
              className="form-control"
              onKeyDown={handleKeyPress}
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btn btn-primary">Submit</button>
            <button
              onClick={() => {
                reset();
              }}
              className="btn m-4 btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Addtodo;
