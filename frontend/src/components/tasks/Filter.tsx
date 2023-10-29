import Badge from "../Badge";

const Filter = () => {
  return (
    <div className="filter-container">
      <Badge color="warning">All</Badge>
      <Badge color="info">Active</Badge>
      <Badge color="success">Completed</Badge>
      <Badge color="error">Expired</Badge>
    </div>
  );
};

export default Filter;
