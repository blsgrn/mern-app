import error from "../assets/images/error.png";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Error() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <Card color="teal" className="mt-6 w-96">
        <CardHeader className="relative h-56">
          <img src={error} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography color="black" variant="h5" className="mb-2">
            Page Not Found
          </Typography>
        </CardBody>
        <CardFooter
          divider
          className="flex items-center justify-center text-center py-3"
        >
          <Link to={`/`} activeClassName="active">
            <Typography className="hover:text-yellow-400" variant="h3">
              Back To Home
            </Typography>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Error;
