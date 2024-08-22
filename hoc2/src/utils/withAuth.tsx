/* eslint-disable @typescript-eslint/no-explicit-any */

const withAuth = (Component: any) => {

    const isAuthenticated = false;       // auth logic

    return function (props) {
        if (isAuthenticated) {
            return <Component {...props} />
        }else{
            return <p>Please login to Access</p>
        }
    }
}

export default withAuth