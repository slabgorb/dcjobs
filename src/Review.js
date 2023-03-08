import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Container,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
function Review(props) {
  return (
    <Card>
      <CardContent>
        <Container>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Container>
        {props.reviewer}
        <Typography>{props.date}</Typography>
        <Typography>{props.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default Review;
