import { Card, Container } from "react-bootstrap"
import { useForm } from "react-hook-form"

const Signup = () => {
  return (
    <>
    <Container className="m-4">
        <Card>
            <Card.Body>
                <form>
                    <label className="form-label m-3" htmlFor="name">Name</label>
                    <input className="form-input m-3" placeholder="Enter name" ></input>
                </form>
            </Card.Body>
        </Card>
    </Container>
    </>
  )
}

export default Signup