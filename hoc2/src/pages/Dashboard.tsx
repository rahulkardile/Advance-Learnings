import withAuth from "../utils/withAuth"

const Dashboard = () => {
  return (
    <div>Your Dashboard . . . </div>
  )
}

const AuthDashboard = withAuth(Dashboard);

export default AuthDashboard;