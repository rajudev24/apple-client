import AddContent from "./components/AddContent/AddContent";
import ShowContent from "./components/ShowContent/ShowContent";

const admin = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">
        Welcome to the Admin Panel
      </h1>
      <AddContent />
      <ShowContent />
    </div>
  );
};

export default admin;
