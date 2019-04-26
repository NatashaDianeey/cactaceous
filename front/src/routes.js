function RoutesGeneral(route) {
    return (
        <Route
        path={route.path}
        render={props => (
            
            <route.component {...props} routes={route.routes} />
        )}
        />
    );
}

export default RoutesGeneral;