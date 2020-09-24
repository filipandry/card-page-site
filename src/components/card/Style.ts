import { createUseStyles } from "react-jss";
import { ICardProps } from "../../interfaces";

export const useStyles = createUseStyles({
  root: {
    minWidth: "60vw",
    height: "60vh",
    width: "300px",
    maxWidth: "99%",
    //border: "1px solid #555",
    borderRadius: 2,
    boxShadow: "0 0 10px #555",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // padding: 10,
    background: "#fff"
  },
  background: {
    width: (props: ICardProps) => props.WindowSize?.width,
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    background: "#ccc"
  },
  backgroundNewLeft: {
    width: (props: ICardProps) => props.WindowSize?.width,
    height: "100vh",
    position: "absolute",
    top: 0,
    left: "-100%",
    background: "#ccc"
  },
  backgroundNewRight: {
    width: (props: ICardProps) => props.WindowSize?.width,
    height: "100vh",
    position: "absolute",
    top: 0,
    left: "100%",
    background: "#ccc"
  },
  backgroundOld: {
    width: (props: ICardProps) => props.WindowSize?.width,
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    background: "#ccc"
  },
  next: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    padding: 5,
    background: "rgba(0,0,0,0.2)",
    "&:hover": {
      background: "rgba(0,0,0,0.25)"
    }
  },
  previous: {
    position: "absolute",
    left: 20,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    padding: 5,
    background: "rgba(0,0,0,0.2)",
    "&:hover": {
      background: "rgba(0,0,0,0.25)"
    }
  },
  animateLeft: {
    transition: "all .5s linear",
    left: "0"
  },
  animateOldLeft: {
    transition: "all .5s linear",
    left: "100%"
  },
  animateRight: {
    transition: "all .5s linear",
    left: "0"
  },
  animateOldRight: {
    transition: "all .5s linear",
    left: "-100%"
  },
  title: {
    position: "absolute",
    textAlign: "center",
    top: "5vh",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,0.1)",
    padding: 10,
    fontSize: 30
  }
});
