import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { removeTodo, updateTodo } from "../ReduxToolkit/Slices/todoslice";

const schema = z.object({
  name: z.string().min(3, { message: "Enter Name of at least 3 chars" }),
  description: z
    .string()
    .min(10, { message: "Enter Description of at least 10 chars" }),
});

type TodoFormData = z.infer<typeof schema>;

interface Props {
  name: string;
  id: number;
  key: number;
  description: string;
  todos: TodoFormData[];
}

const TodoItem = ({ name, key, id, description, todos }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoFormData>({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (data: TodoFormData) => {
    console.log("At Item data : ", data);

    dispatch(updateTodo({ id, data }));
    setIsEditing(false);

   
  };

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    reset({
      name,
      description,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      <Card
        style={{
          padding: "20px",
          border: "2px solid aqua",
          borderRadius: "5px",
        }}
        className="mt-3 shadow-sm"
      >
        <Card.Body>
          {isEditing ? (
            <form onSubmit={handleSubmit(handleUpdate)}>
              <div className="mb-3">
                <label className="mb-3 form-label" htmlFor="name">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  {...register("name")}
                  defaultValue={name}
                  className="mb-3 form-control"
                ></input>
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div m-3>
                <label className="mb-3 form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  rows={4}
                  {...register("description")}
                  defaultValue={description}
                  className="mb-3 form-control"
                />
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}
              </div>
              <Row>
                <Col>
                  <Button className="padding-3" variant="success" type="submit">
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    className="m-2"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </form>
          ) : (
            <>
              <Row>
                <Col>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </Col>
                <Col className="d-flex justify-content-end">
                  <div className="m-3">
                    <button
                      style={{ padding: "10px" }}
                      className="m-2 btn btn-primary"
                      onClick={handleEdit}
                    >
                      <AiFillEdit /> Edit
                    </button>
                    <button
                      style={{ padding: "10px" }}
                      className=" m-2 btn btn-danger"
                      onClick={handleDelete}
                    >
                      <AiFillDelete /> Delete
                    </button>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoItem;
