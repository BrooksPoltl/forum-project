const styles = {
    form:{
        backgroundColor: "white",
        width: "50%",
        padding: "5%",
        minHeight: "100vh",
        zIndex: "2",
    },
    signUpButton:{
        background: 'linear-gradient(45deg, #7F96FF 30%, #A6CFD5 90%)',
        boxShadow: "1px 10px 5px 0px rgba(0,0,0,0.75)",
        margin: "10px 25%",
        width: "50%",
    },
    headerText:{
        color: "#7F96FF",
        fontWeight: "bold",
        textShadow: "1px 1px #A6CFD5",

    },
    loadingContainer:{
        margin: "20px 0px",
        display:"flex",
        justifyContent: "center", 
        alignContent: "center" 
    },
    formContainer: {
        display: "flex", 
        flexDirection: "column"
    },
    errorMessage:{
        color: "red",
        // fontWeight: "bold",
        fontSize: "18px",
    }
}
export default styles;
