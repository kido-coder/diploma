function PleaseLogin() {
    return (
        <div id='pls'>
            <p id='plslogin' onClick={() => {
                                window.location.pathname = '/';
                            }}>Please Login!</p>
        </div>
    )
}

export default PleaseLogin;