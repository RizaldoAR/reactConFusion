import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments == null) {
    return <div></div>;
  }
  const cmnts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Comments </h4>
      <ul className="list-unstyled">{cmnts}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  const dish = props.dish;

  if (dish == null) {
    return <div></div>;
  }
  const dishItem = <RenderDish dish={props.dish} />;
  const dishComment = <RenderComments comments={props.dish.comment} />;

  return (
    <div className="row">
      {dishItem}
      {dishComment}
    </div>
  );
};

export default DishDetail;
