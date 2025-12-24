import DashBoard from "./DashBoard";
import withAuth from "./hoc/withAuth";

const ProtectedDashBoard = withAuth(DashBoard);

export default ProtectedDashBoard;